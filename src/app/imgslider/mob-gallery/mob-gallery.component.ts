import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mob-gallery',
  templateUrl: './mob-gallery.component.html',
  styleUrls: ['./mob-gallery.component.scss'],
})
export class MobGalleryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  imageObject = [
    {
      image: '/assets/Images/Home/clinic/chair.jpg',
      thumbImage: '/assets/Images/Home/clinic/chair.jpg',
    },
    {
      image: '/assets/Images/Home/clinic/door.jpg',
      thumbImage: '/assets/Images/Home/clinic/door.jpg',
    },
    {
      image: '/assets/Images/Home/clinic/front.jpg',
      thumbImage: 'assets/Images/Home/clinic/front.jpg',
    },
    {
      image: '/assets/Images/Home/clinic/chair2.jpg',
      thumbImage: '/assets/Images/Home/clinic/chair2.jpg',
    },
    {
      image: '/assets/Images/Home/clinic/hall.jpg',
      thumbImage: '/assets/Images/Home/clinic/hall.jpg',
    },
    {
      image: '/assets/Images/Home/clinic/room.jpg',
      thumbImage: '/assets/Images/Home/clinic/room.jpg',
    },
    {
      image: '/assets/Images/Home/clinic/front2.jpg',
      thumbImage: '/assets/Images/Home/clinic/front2.jpg',
    },
    {
      image: '/assets/Images/Home/clinic/hall2.jpg',
      thumbImage: '/assets/Images/Home/clinic/hall2.jpg',
    },
    {
      image: '/assets/Images/Home/clinic/room.jpg',
      thumbImage: '/assets/Images/Home/clinic/room.jpg',
    },
    {
      image: '/assets/Images/Home/clinic/room2.jpg',
      thumbImage: '/assets/Images/Home/clinic/room2.jpg',
    },
    {
      image: '/assets/Images/Home/clinic/room1.jpg',
      thumbImage: '/assets/Images/Home/clinic/room1.jpg',
    },
  ];
}
