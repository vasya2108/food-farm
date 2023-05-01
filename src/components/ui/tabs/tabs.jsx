import { useState } from "react";
import { TitleList, TitleButton, Content } from "./styles";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const content = tabs[activeTab].isHtml ? (
    <div dangerouslySetInnerHTML={{ __html: tabs[activeTab].content }} />
  ) : (
    tabs[activeTab].content
  );

  return (
    <div>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <TitleButton isActive key={item.title}>
                  {item.title}
                </TitleButton>
              );
            }
            return (
              <TitleButton key={item.title} onClick={() => setActiveTab(index)}>
                {item.title}
              </TitleButton>
            );
          })}
      </TitleList>
      <Content>{content}</Content>
    </div>
  );
}

export default Tabs;
