//ビデオ入れ
    const mapMargin = 0.04;
    const videoSources = [
     {
      src: "./movs/tennisball.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      mapToTime(x, y, duration){
        //正規化比率を算出
        const t = (x - this.xMin) / (this.xMax - this.xMin);
        //0~1にクリップ
        const clip = Math.min(Math.max(t, 0), 1);
        return (1 - clip) * duration;
      }
      },
      {
      src: "./movs_high/train/syaso.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1 - clip) * duration;
      }
      },
      {
      src: "./movs_high/train/syaso.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
      src: "./movs/elevator.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1 - clip) * duration;
      }
      },
       {
      src: "./movs/elevator2.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1 - clip) * duration;
      }
      },
      {
      src: "./movs/movingRoad.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.2, yMax: 0.8,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      mapToTime(x, y, duration){
        const t = (x - this.xMin) / (this.xMax - this.xMin);
        return Math.min(Math.max(t, 0), 1) * duration;
      }
      },
       {
      src: "./movs/movingTrain.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        return Math.min(Math.max(t, 0), 1) * duration;
      }
      },
      {
        src: "./movs/crossing.mp4",
        start: {x: 0.2, y: 0.2},
        end:   {x: 0.8, y: 0.8},
        
      },
      {
        src: "./movs/escalator_2.mp4",
        start: {x: 1.0 , y: 0.0},
        end:   {x: 0.0, y: 1.0},
        
      },
      {
      dual: ["./movs/shadow.mp4","./movs/sun.mp4"],
        start: {x: 0.0 , y: 1.0},
        end:   {x: 1.0, y: 0.0},
        
      },
      {
      zoom: ["./movs/train_zoom.mp4"],
        xMin: 0.3, xMax: 0.7,
        yMin: 0.0, yMax: 1.0,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
         mapToTime(x, y, duration, distVal){
          const raw = (distVal - this.yMin) / (this.yMax - this.yMin);
          const clip = Math.min(Math.max(raw, 0), 1);
          return clip * (duration - 1/60);
        }
      },
       {
      zoom: ["./movs/train_zoom.mp4"],
        xMin: 0.3, xMax: 0.7,
        yMin: 0.0, yMax: 1.0,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
         mapToTime(x, y, duration, distVal){
          const raw = (distVal - this.yMin) / (this.yMax - this.yMin);
          const clip = Math.min(Math.max(raw, 0), 1);
          return (1-clip) * (duration - 1/60);
        }
      },
      {
      src: "./movs/karugamo.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1-clip) * duration;
      }
      },
      {
      src: "./movs/koumori.mp4",
      xMin: 0.2, xMax: 0.8,
      yMin: 0.2, yMax: 0.8,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
        {
      src: "./movs/monkey.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
        {
      src: "./movs/karugamo2.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
       {
      src: "./movs/road01_car.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
        {
      src: "./movs/road01_bike.mp4",
      xMin: 0.2, xMax: 0.8,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1 - clip) * duration;
      }
      },
      {
      zoom: ["./movs/road01_dog.mp4"],
        xMin: 0.3, xMax: 0.7,
        yMin: 0.1, yMax: 0.9,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
        mapToTime(x, y, duration, distVal){
          const raw = (distVal - this.yMin) / (this.yMax - this.yMin);
          const clip = Math.min(Math.max(raw, 0), 1);
          return clip * (duration - 1/60);
        }
      },
      {
      zoom: ["./movs/road01_zoom.mp4"],
        xMin: 0.3, xMax: 0.7,
        yMin: 0.1, yMax: 0.9,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
         mapToTime(x, y, duration, distVal){
          const raw = (distVal - this.yMin) / (this.yMax - this.yMin);
          const clip = Math.min(Math.max(raw, 0), 1);
          return clip * (duration - 1/60);
        }
      },
        {
      src: "./movs/road01_car02.mp4",
      xMin: 0.2, xMax: 0.8,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1-clip) * duration;
      }
      },
        {
      src: "./movs/road01_car02.mp4",
      xMin: 0.2, xMax: 0.8,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
         {
      zoom: ["./movs/car_small.mp4"],
        xMin: 0.3, xMax: 0.7,
        yMin: 0.1, yMax: 0.9,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
        mapToTime(x, y, duration, distVal){
          const raw = (distVal - this.yMin) / (this.yMax - this.yMin);
          const clip = Math.min(Math.max(raw, 0), 1);
          return (1 - clip) * (duration - 1/60);
        }
      },
         {
      zoom: ["./movs/car_big.mp4"],
        xMin: 0.3, xMax: 0.7,
        yMin: 0.1, yMax: 0.9,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
        mapToTime(x, y, duration, distVal){
          const raw = (distVal - this.yMin) / (this.yMax - this.yMin);
          const clip = Math.min(Math.max(raw, 0), 1);
          return clip * (duration - 1/60);
        }
      },
      {
      dual: ["./movs/3train/01.mp4","./movs/3train/02.mp4"],
         xMin: 0.2, xMax: 0.8,
         yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
       {
      src: "./movs/car_migi.mp4",
      xMin: 0.2, xMax: 0.8,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1-clip) * duration;
      }
      },
      {
        src: "./movs/pet_taosu.mp4",
        start: {x: 0.2 , y: 0.1},
        end:   {x: 1.0,  y: 0.9}
      },
    {
      src: "./movs/draw_line_yoko.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
        src: "./movs/draw_line_naname.mp4",
        start: {x: 0.0 , y: 0.0},
        end:   {x: 1.0,  y: 1.0},
        
      },
      {
      src: "./movs/pet_tubusu.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
      zoom: ["./movs/pet_tubusu.mp4"],
        xMin: 0.3, xMax: 0.7,
        yMin: 0.1, yMax: 0.9,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
        mapToTime(x, y, duration, distVal){
          const raw = (distVal - this.yMin) / (this.yMax - this.yMin);
          const clip = Math.min(Math.max(raw, 0), 1);
          return (1 - clip) * (duration - 1/60);
        }
      },
       {
      src: "./movs/draw_line_yoko2.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1 - clip) * duration;
      }
      },
        {
      src: "./movs/syoshitsuten.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
         {
      src: "./movs/gabyou.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
        {
      src: "./movs/hitogomi_car.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
           {
      src: "./movs/hitogomi.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
       {
      src: "./movs/hitogomi.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1 - clip) * duration;
      }
      },
       {
        src: "./movs/pet_taosu02.mp4",
        start: {x: 0.2 , y: 0.1},
        end:   {x: 1.0,  y: 0.9}
      },
      {
      src: "./movs/note_page.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
      src: "./movs/wave.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
       {
      src: "./movs/wave_02.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1-clip) * duration;
      }
      },
      {
      zoom: ["./movs/note_open.mp4"],
        axis: "x",
        xMin: 0.1, xMax: 0.9,
        yMin: 0.3, yMax: 0.7,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
        mapToTime(x, y, duration, dx){
          const raw = (dx - this.xMin) / (this.xMax - this.xMin);
          const clip = Math.min(Math.max(raw, 0), 1);
          return clip * (duration - 1/60);
        }
      },
         {
      src: "./movs/elevator_ue.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1-clip) * duration;
      }
      },
      {
      src: "./movs/elevator_shita.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
       {
      src: "./movs/blanco.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1-clip) * duration;
      }
      },
        {
      src: "./movs/turtle.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1-clip) * duration;
      }
      },
      {
        src:"./movs/shingoki.mp4",
        xMin: 0.1, xMax: 0.9,
        yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1-clip) * duration;
      }
      },
        {
        src:"./movs/shingoki2.mp4",
        xMin: 0.1, xMax: 0.9,
        yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
       {
      dual: ["./movs/2train/01.mp4","./movs/2train/02.mp4"],
         xMin: 0.2, xMax: 0.8,
         yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
        {
        src:"./movs/suisya.mp4",
        xMin: 0.1, xMax: 0.9,
        yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
        src:"./movs/suisya.mp4",
        xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
        {
        src: "./movs/amewave.mp4",
        start: {x: 1.0 , y: 0.0},
        end:   {x: 0.0, y: 1.0},
         
      },
        {
        src:"./movs/elevator03.mp4",
        xMin: 0.1, xMax: 0.9,
        yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1 - clip) * duration;
      }
      },
       {
        src:"./movs/suiteki.mp4",
        xMin: 0.1, xMax: 0.9,
        yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
        src:"./movs_high/water/wTate.mp4",
        xMin: 0.0, xMax: 1.0,
        yMin: 0.3, yMax: 0.7,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
      zoom: ["./movs/otosu.mp4"],
        xMin: 0.1, xMax: 0.9,
        yMin: 0.3, yMax: 0.7,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
        mapToTime(x, y, duration, dx){
          const raw = (dx - this.xMin) / (this.xMax - this.xMin);
          const clip = Math.min(Math.max(raw, 0), 1);
          return clip * (duration - 1/60);
        }
      },
       {
        src:"./movs/otosu.mp4",
        xMin: 0.1, xMax: 0.9,
        yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
           {
        src:"./movs/fishes.mp4",
        xMin: 0.1, xMax: 0.9,
        yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
        src:"./movs/cellotape_koma.mp4",
        xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1 - clip) * duration;
      }
      },
       {
        src:"./movs/cellotape.mp4",
        xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1 - clip) * duration;
      }
      },
      {
      zoom: ["./movs/compass_koma.mp4"],
        xMin: 0.1, xMax: 0.9,
        yMin: 0.1, yMax: 0.9,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
        mapToTime(x, y, duration, dx){
          const raw = (dx - this.xMin) / (this.xMax - this.xMin);
          const clip = Math.min(Math.max(raw, 0), 1);
          return clip * (duration - 1/60);
        }
      },
      {
      zoom: ["./movs/compass.mp4"],
        xMin: 0.1, xMax: 0.9,
        yMin: 0.1, yMax: 0.9,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
        mapToTime(x, y, duration, dx){
          const raw = (dx - this.xMin) / (this.xMax - this.xMin);
          const clip = Math.min(Math.max(raw, 0), 1);
          return clip * (duration - 1/60);
        }
      },
          {
      src:"./movs/shadow.mp4",
        start: {x: 0.0 , y: 1.0},
        end:   {x: 1.0, y: 0.0},
        
      },
      {
      src: "./movs/sun.mp4",
        start: {x: 0.0 , y: 1.0},
        end:   {x: 1.0, y: 0.0},
      },
      {
      src:"./movs/3train/01.mp4",
         xMin: 0.2, xMax: 0.8,
         yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
      src:"./movs/3train/02.mp4",
         xMin: 0.2, xMax: 0.8,
         yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
      src:"./movs/2train/01.mp4",
         xMin: 0.2, xMax: 0.8,
         yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
       {
      src:"./movs/2train/02.mp4",
         xMin: 0.2, xMax: 0.8,
         yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
      src:"./movs/glass.mp4",
         xMin: 0.2, xMax: 0.8,
         yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
      src:"./movs/yubibird.mp4",
         xMin: 0.3, xMax: 0.7,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
       {
      src:"./movs/yubi_wolk.mp4",
         xMin: 0.3, xMax: 0.7,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
      src:"./movs/densha_heiso.mp4",
         xMin: 0.3, xMax: 0.7,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
      src:"./movs/yubi_ball.mp4",
         xMin: 0.3, xMax: 0.7,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
      src:"./movs/densha_heiso.mp4",
         xMin: 0.3, xMax: 0.7,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
      src:"./movs_high/wind.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1 - clip) * duration;
      }
      },
        {
      src:"./movs_high/jihanki/jihan01.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
              {
      src:"./movs_high/jihanki/jihan02.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1 - clip) * duration;
      }
      },
      {
      src:"./movs_high/jihanki/jihan03.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
       {
      src:"./movs_high/Scrossing_yajirusi.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
      src:"./movs_high/non.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
      src:"./movs_high/suwaru.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
      src: "./movs_high/crane.mp4",
        start: {x: 0.0 , y: 1.0},
        end:   {x: 1.0, y: 0.0},
      },
      {
      zoom: ["./movs_high/hito_zoom.mp4"],
        xMin: 0.1, xMax: 0.9,
        yMin: 0.1, yMax: 0.9,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
        mapToTime(x, y, duration, dx){
          const raw = (dx - this.xMin) / (this.xMax - this.xMin);
          const clip = Math.min(Math.max(raw, 0), 1);
          return (1-clip) * (duration - 1/60);
        }
      },
      {
      src:"./movs_high/Miller.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
      {
      src:"./movs_high/Miller.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1 - clip) * duration;
      }
      },
      {
      src:"./movs_high/random_street.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1 - clip) * duration;
      }
      },
    ];

    videoSources.forEach(cfg => {
  if (cfg.start && cfg.end) {
   
    const sx = cfg.start.x, sy = cfg.start.y;
    const ex = cfg.end.x,   ey = cfg.end.y;
    const vx = ex - sx,     vy = ey - sy;
    const segLensq = vx*vx + vy*vy;

    cfg.hitPoint = (xNorm, yNorm) => {
      const mx = xNorm, my = yNorm;
      const wx = mx - sx, wy = my - sy;
      let t = (wx*vx + wy*vy)/segLensq;
      t = Math.min(Math.max(t, 0), 1);
      const px = sx + t*vx, py = sy + t*vy;
      return Math.hypot(mx-px, my-py) < mapMargin + 0.1;
    };

    cfg.mapToTime = (xNorm, yNorm, duration) => {
      const mx = xNorm, my = yNorm;
      const wx = mx - sx, wy = my - sy;
      let t = (wx*vx + wy*vy)/segLensq;
      t = Math.min(Math.max(t, 0), 1);
      return t * duration;
    };
  }
  
});

    
    
    let currentVideoIndex = 0;
    let currentConfig = videoSources[currentVideoIndex]; 

    const video = document.getElementById('input');
    const canvas = document.getElementById('output');
    const ctx = canvas.getContext('2d');
    
    const canvas2 = document.getElementById("timeRect");
    const ctx2 = canvas.getContext("2d");
    
    const videoFootage = document.getElementById('videoFootage');
    const dualContainer = document.getElementById("dualContainer");
    const videoL = document.getElementById("videoL");
    const videoR = document.getElementById("videoR");
    
    var currentTimeHis = [];
    
    function switchVideo(toIndex){
      isPinching = false;
      wasPinching = false;
      lostFrames = 0;
      window.historyY4 = [];
      window.historyY8 = [];
      window.historyX4 = [];
      window.historyX8 = [];
      videoFootage.pause();
      videoFootage.currentTime = 0;
      videoL.pause();
      videoL.currentTime = 0;
      videoR.pause();
      videoR.currentTime = 0;

      // 範囲内に収める
      currentVideoIndex = ((toIndex % videoSources.length) + videoSources.length) % videoSources.length;
      currentConfig = videoSources[currentVideoIndex];

      if (Array.isArray(currentConfig.dual)) {
        videoFootage.style.display = "none";
        dualContainer.style.display = "flex";

        videoL.src = currentConfig.dual[0];
        videoR.src = currentConfig.dual[1];
        videoL.load();
        videoR.load();
        videoL.play();
        videoR.play();

      } else if (currentConfig.zoom) {
        dualContainer.style.display = "none";
        videoFootage.style.display = "block";

        videoFootage.src = currentConfig.zoom[0];
        videoFootage.load();
        videoFootage.play();

      } else {
        dualContainer.style.display = "none";
        videoFootage.style.display = "block";

        // 動画の切り替え
        videoFootage.src = currentConfig.src;
        videoFootage.load();
        videoFootage.play();
      }
      
    }

    let isPinching = false;
    let wasPinching = false;

    //手検出のロストフレームカウント
    let lostFrames = 0;
    const maxLostFrames = 20;

    let stopCurrentTime = 0;
    const stopMax = 300;

    // スムージング用変数と係数
    let smoothedIndexPosX = 0;
    let smoothedIndexPosY = 0;
    const smoothingAlpha = 0.15; // 大きいほど追従速く、小さいほど滑らか
    
    //関連ファイルの読み込み
    const config = {
      locateFile: file => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    };
    const hands = new Hands(config);

    //カメラからの映像をhands.jsで使えるようにする
    const camera = new Camera(video, {
      onFrame: async () => {
        await hands.send({image: video});
      },
      width: 600,
      height: 400
    });

    hands.setOptions({
        maxNumHands: 1,              //検出する手の最大数
        modelComplexity: 1,          //ランドマーク検出精度(0か1)
        minDetectionConfidence: 0.3, //手を検出するための信頼値(0.0~1.0)　ここ0にしたら面白そう
        minTrackingConfidence: 0.2   //ランドマーク追跡の信頼度(0.0~1.0)
    });


    //形状認識した結果の取得
    hands.onResults(results => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
      // 毎フレーム currentTime を履歴に追加
      const frameTime = Array.isArray(currentConfig.dual)
        ? videoL.currentTime
        : videoFootage.currentTime;
      currentTimeHis.push(frameTime);
      if (currentTimeHis.length > 240) {
        currentTimeHis.shift();
      }
      console.log(currentTimeHis[currentTimeHis.length - 1]);
      ctx.strokeStyle = "yellow";
      ctx.lineWidth = 11;

      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        lostFrames = 0;
        results.multiHandLandmarks.forEach(marks => {
          
          let newTarget = 0;
          let duration = 0;

          // 骨組みとランドマークを描画
          //drawConnectors(ctx, marks, HAND_CONNECTIONS, { color: 'white', lineWidth: 1 });
          drawLandmarks(ctx, marks, { color: 'white', radius: 4.2 });

          // 指先の座標取得
          const fingPosX = marks[8].x;
          const fingPosY = marks[8].y;
          const fingPosX2 = marks[4].x;
          const fingPosY2 = marks[4].y;
          const fingPosZ = marks[8].z;

          // スムージング用履歴管理
          if (!Array.isArray(window.historyY4)) window.historyY4 = [];
          if (!Array.isArray(window.historyY8)) window.historyY8 = [];
          if (!Array.isArray(window.historyX4)) window.historyX4 = [];
          if (!Array.isArray(window.historyX8)) window.historyX8 = [];

          let historyY4 = window.historyY4;
          let historyY8 = window.historyY8;
          let historyX4 = window.historyX4;
          let historyX8 = window.historyX8;

          const historyLength = 9;
          historyY4.push(fingPosY2);
          historyY8.push(fingPosY);
          if (historyY4.length > historyLength) historyY4.shift();
          if (historyY8.length > historyLength) historyY8.shift();
          const avgY4 = historyY4.reduce((a, b) => a + b, 0) / historyY4.length;
          const avgY8 = historyY8.reduce((a, b) => a + b, 0) / historyY8.length;

          historyX4.push(fingPosX2);
          historyX8.push(fingPosX);
          if(historyX4.length > historyLength) historyX4.shift();
          if(historyX8.length > historyLength) historyX8.shift();
          const avgX4 = historyX4.reduce((a, b) => a + b, 0) / historyX4.length;
          const avgX8 = historyX8.reduce((a, b) => a + b, 0) / historyX8.length;


          const rawX = (fingPosX + fingPosX2) / 2;
          const rawY = (fingPosY + fingPosY2) / 2;
          smoothedIndexPosX = smoothingAlpha * rawX + (1 - smoothingAlpha) * smoothedIndexPosX;
          smoothedIndexPosY = smoothingAlpha * rawY + (1 - smoothingAlpha) * smoothedIndexPosY;
          const smoothPosX = smoothedIndexPosX;
          const smoothPosY = smoothedIndexPosY;

          const dx = fingPosX - fingPosX2;
          const dy = fingPosY - fingPosY2;
          const distance = Math.hypot(dx, dy);
          const tikasa = 0.08;

          // ピンチ判定
          if (distance < tikasa) {
            duration = Array.isArray(currentConfig.dual)
            ? videoL.duration
            : videoFootage.duration;
            let distVal = Math.abs(avgY8 - avgY4);
            newTarget = currentConfig.mapToTime(
              smoothedIndexPosX,
              smoothedIndexPosY,
              duration,
              distVal
            );
            const lastTime = currentTimeHis.at(-1);
            console.log(lastTime);
            
            if (!isPinching) {
              isPinching = true;
              wasPinching = true;
            }
          } else {
            const lastTime = currentTimeHis.at(-1);
            console.log(lastTime);
            isPinching = false;
            if (!isPinching) {
              if(currentConfig.dual){
                videoL.play();
                videoR.play();
              } else {
              videoFootage.play();
          }
        }
      }
    

          // ヒットポイント外で wasPinching をリセット
          if (!currentConfig.hitPoint(fingPosX, fingPosY)) {
            wasPinching = false;
          }

          // 当たり判定内外で再生制御・マッピング
          const epsilon = 0.05;
          if (currentConfig.hitPoint(fingPosX, fingPosY)) {
            const duration =
              Array.isArray(currentConfig.dual)
                ? videoL.duration
                : videoFootage.duration;
            let t = newTarget;
            

            if (currentConfig.start && currentConfig.end && isPinching) {
              videoFootage.pause();
              if (Number.isFinite(t)) {
                videoFootage.currentTime = t;
                if(t < 0.01)t = 0;
                if(t > 0.99)t = videoFootage.duration;
              } else {
                console.warn("Invalid start/end seek time:", t);
              }
            }
            else if (Array.isArray(currentConfig.dual) && isPinching) {
              videoL.pause();
              videoR.pause();
              if (isPinching) {
                if (Number.isFinite(t)) {
                  videoL.currentTime = t;
                  videoR.currentTime = t;
                  if(t < 0.01)t = 0;
                  if(t > 0.99)t = 1;
                } else {
                  console.warn("Invalid seek time for dual:", t);
                }
              } else {
                videoL.play();
                videoR.play();
              }
            } else if (currentConfig.zoom && wasPinching){
              videoFootage.pause();
              const dyAbs = Math.abs(avgY8 - avgY4);
              const dxAbs = Math.abs(avgX8 - avgX4);
              const duration = videoFootage.duration;
              const distVal = (currentConfig.axis === "x")? dxAbs :
              dyAbs;

              const t = currentConfig.mapToTime(
                smoothPosX,
                smoothPosY,
                duration,
                distVal
              );
              if (Number.isFinite(t)) {
                videoFootage.currentTime = t;
              } else {
                console.warn("Invalid zoom seek time:", t);
              }
            } else if(isPinching){
              videoFootage.pause();
              if (Number.isFinite(t)) {
                videoFootage.currentTime = t;
              } else {
                console.warn("Invalid pinch seek time:", t);
              }
            }
          } else if (!(isPinching && wasPinching)) {
            //const epsilon = 0.05;
            if (Array.isArray(currentConfig.dual)) {
              videoL.play();
              videoR.play();
            }
          } else {
            if (videoFootage.currentTime < videoFootage.duration - epsilon) {
              videoFootage.play();
            }
          }
        }); // forEach
      } else { // 指が消えたら
        isPinching = false;
        wasPinching = false;
        lostFrames++;
        // 最新の履歴値を常に表示
        if (currentTimeHis.length > 0) {
          console.log(currentTimeHis[currentTimeHis.length - 1]);
        }
        console.log("lostFrames:", lostFrames);
      }
      if(lostFrames > maxLostFrames){
      videoFootage.play().catch(() => {});
      videoL.play().catch(() => {});
      videoR.play().catch(() => {});
      lostFrames = 0;
      }
    }); // hands.onResults
  
    
    //認識開始・終了ボタン
    /* document.getElementById('start')
      .addEventListener('click', () => camera.start()); */
window.addEventListener("DOMContentLoaded", () => {
    camera.start();
    switchVideo(0);

    // 初期状態を「d 押下時」の状態に設定：検知画面を非表示、videoFootageとdualContainerを中央に配置・拡大
    const outputElem = document.getElementById("output");
    const videos = document.getElementById("videoFootage");
    const dualVideos = document.getElementById("dualContainer");
    // 検知キャンバスを非表示
    outputElem.style.display = "none";
    // videoFootage を画面中央に拡大
    videos.style.width = "60%";
    videos.style.margin = "0";
    videos.style.position = "absolute";
    videos.style.top = "50%";
    videos.style.left = "50%";
    videos.style.transform = "translate(-50%, -50%)";
    // dualContainer を画面中央に拡大
    dualVideos.style.width = "80%";
    dualVideos.style.margin = "0 auto";
    dualVideos.style.position = "absolute";
    dualVideos.style.top = "50%";
    dualVideos.style.left = "50%";
    dualVideos.style.transform = "translate(-50%, -50%)";
});

   let isRunning = true;
     
    document.addEventListener("keydown", event => {
      if(event.key == "Enter"){
        if(isRunning){
          camera.stop();
          videoFootage.pause();
          videoR.pause();
          videoL.pause();
        }else{
          camera.start();
          videoFootage.play();
          videoR.play();
          videoL.play();
        }
        isRunning = !isRunning
      }
    });

    const outputElem = document.getElementById("output");
    const videos = document.getElementById("videoFootage");
    const dualVideos = document.getElementById("dualContainer");

    document.addEventListener("keydown", event => {
       if(event.key === "s"){
      switchVideo(currentVideoIndex + 1);
    } else if (event.key === "a"){
      switchVideo(currentVideoIndex - 1);
    } else if(event.key == "d"){
     if(outputElem.style.display === "none"){
      outputElem.style.display = "block";
      videos.style.width = "500px";
      videos.style.margin = "40px auto 1rem";
      //絶対配置を解除
      videos.style.position = "";
      videos.style.top = "";
      videos.style.left = "";
      videos.style.transform = "";
      
      dualVideos.style.width = "auto";
      dualVideos.style.margin = "40px auto";
      //絶対配置を解除
      dualVideos.style.position = "";
      dualVideos.style.top = "";
      dualVideos.style.left = "";
      dualVideos.style.transform = "";
     }else{
      outputElem.style.display = "none";
      videos.style.width = "60%";
      videos.style.margin = "0";
      videos.style.position = "absolute";
      videos.style.top = "50%";
      videos.style.left = "50%"
      videos.style.transform = "translate(-50%, -50%)";
      
      dualVideos.style.width = "80%";
      dualVideos.style.margin = "0 auto";
      dualVideos.style.position = "absolute";
      dualVideos.style.top = "50%";
      dualVideos.style.left = "50%";
      dualVideos.style.transform = "translate(-50%, -50%)";
      
    }
  }
    
      
    });
 
