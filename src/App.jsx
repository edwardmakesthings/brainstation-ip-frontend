import React, { useState } from "react";
import {
  Text,
  Button,
  Input,
  Textarea,
  Avatar,
  FluentProvider,
} from "@fluentui/react-components";
import {
  Send24Regular,
  ChevronDown24Regular,
  Delete24Regular,
  MoreHorizontal24Regular,
  DrawerDismiss24Regular,
  ChevronCircleDown24Regular,
  Edit24Regular,
  Checkmark24Regular,
  Translate24Regular,
} from "@fluentui/react-icons";

import "./OutlookEmailComposer.scss";

const OutlookEmailComposer = () => {
  const [subject, setSubject] = useState("Test");
  const [body, setBody] = useState("");
  const [to, setTo] = useState("Rembrandt");
  const [showBcc, setShowBcc] = useState(false);
  const [showCc, setShowCc] = useState(false);

  return (
    <FluentProvider>
      <div className="section">
        <div className="email-composer">
          {/* Email header - subject */}
          <div className="email-composer__header">
            <Text weight="semibold" size={500}>
              {subject || "(No subject)"}
            </Text>
          </div>

          {/* Email composition area */}
          <div className="email-composer__body">
            {/* Action bar */}
            <div className="email-composer__action-bar">
              <Button
                appearance="primary"
                icon={<Send24Regular />}
                className="email-composer__send-button"
              >
                Send
              </Button>
              <Button
                icon={<ChevronDown24Regular />}
                appearance="transparent"
                className="email-composer__dropdown-button"
              />

              <Text className="email-composer__recipient-label">To:</Text>
              <div className="email-composer__recipient-field">
                <Input
                  value={to}
                  onChange={(e, data) => setTo(data.value)}
                  appearance="underline"
                  placeholder="Recipients"
                  className="email-composer__input"
                />
              </div>

              <div className="email-composer__action-buttons">
                <Button
                  appearance="primary"
                  icon={<Translate24Regular />}
                  className="email-composer__translate-button"
                >
                  Translate
                </Button>
                <Button
                  appearance="transparent"
                  icon={<Checkmark24Regular />}
                  className="email-composer__icon-button"
                />
                <Button
                  appearance="transparent"
                  icon={<Delete24Regular />}
                  className="email-composer__icon-button"
                />
                <Button
                  appearance="transparent"
                  icon={<DrawerDismiss24Regular />}
                  className="email-composer__icon-button"
                />
              </div>
            </div>

            {/* CC/BCC - shown conditionally */}
            {(showCc || showBcc) && (
              <div className="email-composer__cc-section">
                {showCc && (
                  <div className="email-composer__cc-row">
                    <Text className="email-composer__cc-label">Cc:</Text>
                    <div className="email-composer__cc-field">
                      <Input
                        appearance="underline"
                        placeholder="Carbon copy recipients"
                        className="email-composer__input"
                      />
                    </div>
                  </div>
                )}

                {showBcc && (
                  <div className="email-composer__bcc-row">
                    <Text className="email-composer__bcc-label">Bcc:</Text>
                    <div className="email-composer__bcc-field">
                      <Input
                        appearance="underline"
                        placeholder="Blind carbon copy recipients"
                        className="email-composer__input"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Subject line - only show if empty */}
            {!subject && (
              <div className="email-composer__subject-section">
                <div className="email-composer__subject-row">
                  <Text className="email-composer__subject-label">
                    Subject:
                  </Text>
                  <div className="email-composer__subject-field">
                    <Input
                      value={subject}
                      onChange={(e, data) => setSubject(data.value)}
                      appearance="underline"
                      placeholder="Add a subject"
                      className="email-composer__input"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Email content - take up remaining space */}
            <div className="email-composer__content">
              <Textarea
                placeholder="Type your message here"
                value={body}
                onChange={(e, data) => setBody(data.value)}
                className="email-composer__textarea"
                appearance="outline-none"
              />
              <div className="email-composer__translation"> {body}</div>
            </div>

            {/* Status bar */}
            <div className="email-composer__status-bar">
              <Button
                appearance="transparent"
                icon={<MoreHorizontal24Regular />}
                size="small"
                className="email-composer__more-button"
              />
              <Text size={200} className="email-composer__status-text">
                Draft saved at{" "}
                {new Date().toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </Text>
            </div>
          </div>

          {/* Previous email thread (simulated) */}
          <div className="email-composer__thread">
            <div className="email-composer__thread-item">
              <div className="email-composer__thread-header">
                <Avatar
                  name="Pablo Picasso"
                  size={32}
                  color="colorful"
                  className="email-composer__avatar"
                />
                <div className="email-composer__thread-details">
                  <div className="email-composer__thread-meta">
                    <Text
                      weight="semibold"
                      className="email-composer__sender-name"
                    >
                      Pablo Picasso
                    </Text>
                    <Text size={200} className="email-composer__timestamp">
                      {new Date().toLocaleDateString()}{" "}
                      {new Date().toLocaleTimeString([], {
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </Text>
                  </div>
                  <div className="email-composer__recipient-info">
                    <Text className="email-composer__to-line">
                      To: Rembrandt
                    </Text>
                  </div>
                  <Text className="email-composer__message-text">Test</Text>

                  <div className="email-composer__thread-actions">
                    <Button
                      appearance="subtle"
                      icon={<Edit24Regular />}
                      className="email-composer__reply-button"
                    >
                      Reply
                    </Button>
                    <Button
                      appearance="subtle"
                      className="email-composer__forward-button"
                    >
                      Forward
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FluentProvider>
  );
};

export default OutlookEmailComposer;
