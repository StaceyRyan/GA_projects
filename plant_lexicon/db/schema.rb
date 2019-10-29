# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_28_095129) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "permissions", force: :cascade do |t|
    t.string "user_id"
    t.string "acess_level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "plants", force: :cascade do |t|
    t.string "classification"
    t.string "common_name"
    t.string "scientific_name"
    t.string "image_mature"
    t.string "origin"
    t.string "australian_growing_zone"
    t.string "predators"
    t.string "palatability"
    t.string "toxicity"
    t.string "control"
    t.string "notes"
    t.string "external_link"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image_seedpod"
  end

  create_table "postcode_zones", force: :cascade do |t|
    t.string "sowing_zone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "user_name"
    t.string "email"
    t.string "postcode"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
