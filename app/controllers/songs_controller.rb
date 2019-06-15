class SongsController < ApplicationController
  def index
    if user_signed_in?
      @order = Song.page(params[:page])
      @songs = Song.order("created_at DESC").where(user_id: current_user.id).page(params[:page])
      @count = Song.where(user_id: current_user.id)
      else
      @list = Song.all
      end
  end

  def destroy
    song = Song.find(params[:id])
    song.delete
    redirect_to("/")
  end

  def create
    @song=Song.new(
      singer: song_params[:singer],
      song: song_params[:song],
      user_id: current_user.id
      )
    @song.save
  end

  private
  def song_params
    params.permit(:singer,:song)
  end

end
