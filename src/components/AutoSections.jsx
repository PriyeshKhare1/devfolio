// src/components/AutoSections.jsx
import SectionShrinkLine from "./SectionShrinkLine";
import SectionWrapper from "./SectionWrapper";

export default function AutoSections({ sections }) {
  return (
    <>
      {sections.map((item, index) => {
        // item can be { component: Section, height: 100 }
        let Section, startHeight;
        if (typeof item === "object" && item.component) {
          Section = item.component;
          startHeight = item.height || 100;
        } else {
          Section = item;
          startHeight = 100;
        }

        return (
          <div key={index}>
            {index !== 0 && <SectionShrinkLine startHeight={startHeight} />}

            <SectionWrapper>
              <Section />
            </SectionWrapper>
          </div>
        );
      })}
    </>
  );
}