# DB設計

## userテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null:false|
|password|string|null:false|
|nickname|string|null:false|

### Association
- has_many :songs

## songテーブル
|Column|Type|Options|
|------|----|-------|
|singer|string|null:false,foreign_key:true|
|song|string|null:false,foreign_key:true|
|user_id|integer|null:false,foreign_key:true|

### asociation
- belongs_to :user