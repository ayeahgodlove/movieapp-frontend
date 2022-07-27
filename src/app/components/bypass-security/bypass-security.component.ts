import { Component, Input, OnInit, Output } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';

@Component({
  selector: 'app-bypass-security',
  templateUrl: './bypass-security.component.html',
  styleUrls: ['./bypass-security.component.css'],
})
export class BypassSecurityComponent implements OnInit {
  dangerousUrl: string = '';
  trustedUrl: SafeUrl = '';
  dangerousVideoUrl!: string;
  videoUrl!: SafeResourceUrl;
  @Input() youtubeLink: string = '';
  @Input() title: string = '';

  constructor(private sanitizer: DomSanitizer) {
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }

  ngOnInit(): void {
    this.updateVideoUrl(this.youtubeLink);
  }

  updateVideoUrl(youtubeUrl: string) {
    console.log('dangerousVideoUrl link: ', this.youtubeLink);
    this.dangerousVideoUrl = youtubeUrl;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.dangerousVideoUrl
    );
  }
}
