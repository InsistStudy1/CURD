var fs=require("fs"),dbPath="./db.json";exports.find=function(r){fs.readFile(dbPath,"utf8",function(t,n){if(t)return r(t);r(null,JSON.parse(n).students)})},exports.findById=function(e,i){fs.readFile(dbPath,"utf8",function(t,n){if(t)return i(t);var r=JSON.parse(n).students.find(function(t){return t.id===parseInt(e)});i(null,r)})},exports.new=function(i,f){fs.readFile(dbPath,"utf8",function(t,n){if(t)return f(t);var r=JSON.parse(n).students;i.id=r[r.length-1].id+1,r.push(i);var e=JSON.stringify({students:r});fs.writeFile(dbPath,e,function(t){if(t)return f(t);f(null)})})},exports.edit=function(u,s){fs.readFile(dbPath,"utf8",function(t,n){if(t)return s(t);var r=JSON.parse(n).students;u.id=parseInt(u.id);var e=r.find(function(t){return t.id===u.id});for(var i in u)e[i]=u[i];var f=JSON.stringify({students:r});fs.writeFile(dbPath,f,function(t){if(t)return s(t);s(null)})})},exports.deleteById=function(f,u){fs.readFile(dbPath,"utf8",function(t,n){if(t)return u(t);var r=JSON.parse(n).students,e=r.findIndex(function(t){return t.id===parseInt(f)});r.splice(e,1);var i=JSON.stringify({students:r});fs.writeFile(dbPath,i,function(t){if(t)return u(t);u(null)})})};