class SongsController < ApplicationController
  def index
    # user_signed_in?
    @song=Song.new(
      singer: song_params[:singer],
      song: song_params[:song],
      # user_id: current_user.id
      )
    @song.save
    # @nickname=current_user.nickname
    # params.require(:item).permit(:image,).merge(user_id: current_user.id)
    if user_signed_in?
    @songs = Song.where(user_id: current_user.id)
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
