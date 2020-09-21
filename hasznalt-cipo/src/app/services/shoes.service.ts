import {Injectable} from "@angular/core";
import {ShoeModel} from "../models/ShoeModel";

@Injectable({
  providedIn: "root"
})
export class ShoesService {
  get shoes(): ShoeModel[] {

    return [
      new ShoeModel('assets/images/basic-shue.png'),
      new ShoeModel('assets/images/basic-shue.png'),
      new ShoeModel('assets/images/basic-shue.png'),
      new ShoeModel('assets/images/basic-shue.png'),
      new ShoeModel('assets/images/basic-shue.png'),
      new ShoeModel('assets/images/basic-shue.png'),
      new ShoeModel('assets/images/basic-shue.png'),
      new ShoeModel('assets/images/basic-shue.png'),
      new ShoeModel('assets/images/basic-shue.png'),
      new ShoeModel('assets/images/basic-shue.png')
    ]
  }
}
