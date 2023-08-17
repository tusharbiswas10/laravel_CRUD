<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Diary extends Model
{
  protected $fillable = [
      'memory_name', 'details', 'importance','doe','person_name',
  ];
}
