import { useState } from "react";
import {
  AccordionAtom,
  ContainerAtom,
  GridAtom,
  TextAtom,
  TitleAtom,
} from "../atoms";
import AddIcon from "@mui/icons-material/Add";

export const Faq = () => {
  const testData = [
    {
      id: "1",
      header: <TitleAtom type="h2">Título 1</TitleAtom>,
      content: (
        <TextAtom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
          eleifend erat, eu posuere magna. Morbi justo urna, dignissim sit amet
          suscipit a, euismod sed orci. Phasellus dapibus erat vel ex ultrices
          tempus. Donec pretium, dolor id pellentesque luctus, massa elit mollis
          dolor, vitae consequat ipsum mauris vitae sem.
        </TextAtom>
      ),
    },
    {
      id: "2",
      header: <TitleAtom type="h2">Título 2</TitleAtom>,
      content: (
        <TextAtom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
          eleifend erat, eu posuere magna. Morbi justo urna, dignissim sit amet
          suscipit a, euismod sed orci. Phasellus dapibus erat vel ex ultrices
          tempus. Donec pretium, dolor id pellentesque luctus, massa elit mollis
          dolor, vitae consequat ipsum mauris vitae sem.
        </TextAtom>
      ),
    },
    {
      id: "3",
      header: <TitleAtom type="h2">Título 3</TitleAtom>,
      content: (
        <TextAtom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
          eleifend erat, eu posuere magna. Morbi justo urna, dignissim sit amet
          suscipit a, euismod sed orci. Phasellus dapibus erat vel ex ultrices
          tempus. Donec pretium, dolor id pellentesque luctus, massa elit mollis
          dolor, vitae consequat ipsum mauris vitae sem.
        </TextAtom>
      ),
    },
    {
      id: "4",
      header: <TitleAtom type="h2">Título 4</TitleAtom>,
      content: (
        <TextAtom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
          eleifend erat, eu posuere magna. Morbi justo urna, dignissim sit amet
          suscipit a, euismod sed orci. Phasellus dapibus erat vel ex ultrices
          tempus. Donec pretium, dolor id pellentesque luctus, massa elit mollis
          dolor, vitae consequat ipsum mauris vitae sem.
        </TextAtom>
      ),
    },
    {
      id: "5",
      header: <TitleAtom type="h2">Título 5</TitleAtom>,
      content: (
        <TextAtom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
          eleifend erat, eu posuere magna. Morbi justo urna, dignissim sit amet
          suscipit a, euismod sed orci. Phasellus dapibus erat vel ex ultrices
          tempus. Donec pretium, dolor id pellentesque luctus, massa elit mollis
          dolor, vitae consequat ipsum mauris vitae sem.
        </TextAtom>
      ),
    },
  ];

  const [cuttentActive, setCuttentActive] = useState(0)

  return (
    <ContainerAtom style={{ maxWidth: 1440 }}>
      {testData.map((item, index) => {
        return (
          <GridAtom key={index + 1}>
            <AccordionAtom
              expandIcon={<AddIcon />}
              initialExpanded={index === cuttentActive}
              data={item}
              onCallBack={()=>setCuttentActive(index)}
            />
          </GridAtom>
        );
      })}
    </ContainerAtom>
  );
};
