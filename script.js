*{
  margin: 0;
  padding: 0;
 font-family:'poppins',sans-serif;
 box-sizing: border-box;
}
body{
  background: #7a7aa022;
}
.card{
  width: 90%;
  max-width: 470px;
  background: linear-gradient(135deg, #00feba, #5b548a);
  color: #fff;
  margin: 100px auto 0;
  border-radius: 20px;
  padding: 40px  35px;
  text-align: center;

}
.search{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search input{
  border: 0;
  outline: 0;
  background: #ebfffc;
  color: #555;
  padding: 10px 25px;
  height: 60px;
  border-radius: 30px;
  flex: 1;
  margin-right: 16px;
  font-size:18px ;
}
.search button{
  border: 0;
  outline: 0;
  background: #ebfffc;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.search button img{
  width: 16px;
}
.weather-icon{
  width: 170px;
  margin-top: 30px;
}
.weather h1{
  font-size: 80px;
  font-weight: 500px;
}
.weather h2{
  font-size: 45px;
  font-weight: 400px;
  margin-top: -10px;
}
.details{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 50px;
}
.col{
  display: flex;
  align-items: center;
  text-align: left;
}
.col img{
  width: 40px;
  margin-right: 10px;
}
.humidity, .wind{
  font-size: 28px;
  margin-top: -6px;
}