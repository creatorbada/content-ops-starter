---
type: PageLayout
title: srt
sections:
  - type: FeaturedItemsSection
    title:
      type: TitleBlock
      text: Open positions
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: Subtitle goes here
    items:
      - type: FeaturedItem
        title: Account Executive
        subtitle: Sales
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
      - type: FeaturedItem
        title: Open Source Engineer
        subtitle: Marketing
        text: |+
          <!DOCTYPE html>

          <html lang="pt-BR">
          <head>
              <meta charset="UTF-8">
              <title>Otimizador Gold - Lote SRT</title>
              <style>
                  body {
                      font-family: 'Arial', sans-serif;
                      background-color: #FFFFFF;
                      margin: 0;
                      padding: 20px;
                      box-sizing: border-box;
                      line-height: 1.6;
                  }
                  h2 {
                      text-align: center;
                      color: #DAA520;
                      margin-bottom: 20px;
                  }
                  label {
                      display: block;
                      margin-bottom: 5px;
                      color: #4B0082;
                      font-weight: bold;
                  }
                  input\[type="number"] {
                      width: 100%;
                      padding: 10px;
                      font-size: 16px;
                      border: 1px solid #B8860B;
                      border-radius: 5px;
                      background-color: #FFD700;
                      color: #4B0082;
                      box-sizing: border-box;
                      margin-bottom: 10px;
                  }
                  input\[type="range"] {
                      width: 100%;
                      margin-bottom: 5px;
                  }
                  span.range-value {
                      display: block;
                      text-align: center;
                      margin-bottom: 15px;
                      color: #4B0082;
                  }
                   input\[type="file"] {
                      display: block;
                      width: 100%;
                      padding: 15px 10px;
                      font-size: 16px;
                      cursor: pointer;
                      border: 1px dashed #B8860B;
                      border-radius: 5px;
                      background-color: #FFD700;
                      color: #4B0082;
                      box-sizing: border-box;
                       margin-bottom: 20px;
                   }

                  button {
                      width: 100%;
                      padding: 15px;
                      font-size: 16px;
                      background-color: #DAA520;
                      color: white;
                      border: none;
                      border-radius: 5px;
                      cursor: pointer;
                      transition: background-color 0.3s, transform 0.2s;
                      margin-bottom: 10px;
                  }
                   button:last-child:not(#downloadAllButton) {
                       margin-bottom: 0;
                   }
                  button:hover {
                      background-color: #FFD700;
                      transform: translateY(-2px);
                  }
                   button:disabled {
                      background-color: #ccc;
                      cursor: not-allowed;
                  }

                  .container {
                      max-width: 600px;
                      margin: 20px auto;
                      padding: 20px;
                      background-color: #FFFACD;
                      border: 1px solid #DAA520;
                      border-radius: 8px;
                      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                  }

                  .section {
                       margin-bottom: 20px;
                       padding: 15px;
                       border: 1px dashed #B8860B;
                       border-radius: 5px;
                       background-color: #FFD700;
                  }
                   .section h3 {
                       text-align: center;
                       color: #4B0082;
                       margin-top: 0;
                       margin-bottom: 15px;
                   }


                  .error {
                      background-color: #ffdddd;
                      color: red;
                      padding: 10px;
                      margin-bottom: 20px;
                      border: 1px solid red;
                      border-radius: 5px;
                      text-align: center;
                      word-wrap: break-word;
                  }
                  .success {
                      background-color: #ddffdd;
                      color: green;
                      padding: 10px;
                      margin-bottom: 20px;
                      border: 1px solid green;
                      border-radius: 5px;
                      text-align: center;
                      word-wrap: break-word;
                  }
                   .info {
                      background-color: #e0f7fa;
                      color: #00796b;
                      padding: 10px;
                      margin-bottom: 20px;
                      border: 1px solid #00796b;
                      border-radius: 5px;
                      text-align: center;
                      word-wrap: break-word;
                   }


                  #thanks {
                      text-align: center;
                      margin-top: 30px;
                      font-size: 18px;
                      color: #DAA520;
                      font-weight: bold;
                  }

                  #batch-status {
                      margin-bottom: 15px;
                      font-weight: bold;
                      color: #4B0082;
                      text-align: center;
                      min-height: 1.2em;
                      word-wrap: break-word;
                  }

                  #batch-results {
                      margin-top: 20px;
                      padding: 15px;
                      border: 1px solid #B8860B;
                      border-radius: 5px;
                      background-color: #FFD700;
                  }
                   #batch-results h3 {
                       color: #4B0082;
                       margin-top: 0;
                       margin-bottom: 15px;
                       text-align: center;
                   }
                  #batch-results ul {
                      list-style: none;
                      padding: 0;
                      margin: 0;
                  }
                  #batch-results li {
                      margin-bottom: 8px;
                      padding: 10px;
                      background-color: #DAA520;
                      border: 1px solid #B8860B;
                      border-radius: 4px;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      color: white;
                      word-wrap: break-word;
                      font-size: 0.95rem;
                  }
                  #batch-results li span {
                       flex-grow: 1;
                       margin-right: 10px;
                       word-break: break-all;
                       font-weight: bold;
                  }
                  /* Hide individual download buttons in batch results */
                  #batch-results li button {
                      display: none; /* Hide individual download buttons */
                  }

                   #downloadAllButton {
                      margin-top: 20px;
                       background-color: #4B0082;
                       color: white;
                   }
                    #downloadAllButton:hover {
                       background-color: #6A5ACD;
                    }


              </style>

          </head>
          <body>
              <div class="container">
                  <h2>Otimizador Gold - Lote SRT</h2>

                  <!-- Parameters Section -->
                  <div class="parameters-section section">
                      <h3>Configurações de Processamento</h3>
                      <label for="charCount">Dividir em aproximadamente quantos caracteres por bloco (Máx Estrito):</label>
                      <input type="number" id="charCount" value="490" min="10" step="1" />

                      <label for="pauseTime">Tempo de pausa entre blocos (segundos):</label>
                      <input type="number" id="pauseTime" value="0.3" min="0" step="0.1" />

                      <label for="readingRate">Velocidade de leitura (Caracteres por segundo):</label>
                      <input type="range" id="readingRate" min="5" max="30" step="1" value="14">
                      <span id="readingRateValue" class="range-value">14 c/s</span>
                  </div>

                  <!-- Batch Processing Section -->
                  <div class="batch-process-section section">
                      <h3>Selecionar Arquivos</h3>
                      <label for="fileInput">Selecione um ou mais arquivos .txt:</label>
                      <input type="file" id="fileInput" multiple accept=".txt" />
                      <button id="processButton" onclick="processBatchFiles()">Processar Arquivos em Lote</button>

                      <div id="batch-status"></div>

                       <!-- Results Section -->
                      <div id="batch-results">
                           <h3>Resultados do Lote</h3>
                           <ul id="batch-result-list">
                               <!-- File names will be added here after processing -->
                           </ul>
                            <!-- Download All Button -->
                           <button id="downloadAllButton" disabled onclick="downloadAllSrtFiles()">Baixar Todos os SRTs</button>
                       </div>
                  </div>

                   <p id="thanks">O sonho é a coisa mais real que Existe! Gratidão</p>

              </div> <!-- End of container -->


              <script>
                  // Array to store the generated SRT content and filenames for successful files
                  let generatedSrtFiles = [];

                  // Update range values display
                  document.getElementById('readingRate').addEventListener('input', function() {
                      document.getElementById('readingRateValue').innerText = this.value + ' c/s';
                  });

                  // --- Helper Functions ---

                  function showMessage(message, type = 'info') {
                      // Remove existing non-status messages first for clarity
                      document.querySelectorAll('.container > .error, .container > .success, .container > .info').forEach(msg => msg.remove());

                      const messageDiv = document.createElement('div');
                      messageDiv.classList.add(type);
                      messageDiv.textContent = message;

                      const container = document.querySelector('.container');
                      if (container) {
                           // Insert before the parameters section
                          const parametersSection = container.querySelector('.parameters-section');
                           if (parametersSection) {
                               container.insertBefore(messageDiv, parametersSection);
                           } else {
                               container.prepend(messageDiv); // Fallback
                           }
                      } else {
                          document.body.prepend(messageDiv);
                      }

                      // Auto-remove non-info messages (errors, success) after 7 seconds
                       if (type !== 'info') {
                          setTimeout(() => messageDiv.remove(), 7000);
                       }
                  }

                  function formatTimestamp(seconds) {
                      if (isNaN(seconds) || seconds < 0) return '00:00:00,000';

                      // Ensure rounding to the nearest millisecond
                      const totalMilliseconds = Math.round(seconds * 1000);

                      const hours = Math.floor(totalMilliseconds / 3600000);
                      const remainderMillis = totalMilliseconds % 3600000;
                      const minutes = Math.floor(remainderMillis / 60000);
                      const remainderMillis2 = remainderMillis % 60000;
                      const secs = Math.floor(remainderMillis2 / 1000);
                      const millis = remainderMillis2 % 1000;

                      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')},${String(millis).padStart(3, '0')}`;
                  }


                  // Core text splitting logic - Ensures length <= maxLength and breaks on word/sentence ends
                  function splitTextIntoBlocks(text, maxLength) {
                      const blocks = [];
                      let currentPos = 0;
                      const originalTextLength = text.length;

                       console.log(`--- Starting splitTextIntoBlocks (maxLength: ${maxLength}, total length: ${originalTextLength}) ---`);

                      // Define potential break characters - spaces and sentence-ending punctuation
                      const breakChars = new Set([' ', '.', '?', '!']);

                      while (currentPos < originalTextLength) {
                          // 1. Skip leading whitespace from the current position
                          while (currentPos < originalTextLength && /\s/.test(text[currentPos])) {
                              currentPos++;
                          }
                          if (currentPos >= originalTextLength) {
                              console.log("Reached end of text after skipping whitespace.");
                              break; // Reached end of text
                          }

                          // 2. Determine the absolute maximum end index (exclusive) for the current block.
                          // This is currentPos + maxLength. We need to break AT or BEFORE this point.
                          const hardLimitSplitPointExclusive = Math.min(currentPos + maxLength, originalTextLength);
                           console.log(`Iteration start - currentPos: ${currentPos}, Hard Limit (Exclusive): ${hardLimitSplitPointExclusive}`);


                          // 3. Find the best safe break point (space or punctuation) *at or before* the character *before* the hard limit.
                          // We search backwards from hardLimitSplitPointExclusive - 1 down to currentPos.
                          // The index `i` is the potential index *of* the break character.
                          let breakIndex = -1; // Index *of* the character where we want to break

                          // Search backwards from the character *just before* the hard limit, down to the start of the current segment.
                          for (let i = hardLimitSplitPointExclusive - 1; i >= currentPos; i--) {
                              const char = text[i];

                              // Prioritize sentence end punctuation (. ? !)
                              if (/[.?!]/.test(char)) {
                                  breakIndex = i;
                                  console.log(`Found punctuation break at index ${i}: "${char}"`);
                                  break; // Found the last punctuation break within the limit, prioritize this, stop searching
                              }

                              // Secondary preference: space break
                              if (char === ' ') {
                                  // Found a space at index i. This is a potential break point.
                                  // Since we are searching backwards, the *first* space we find is the *last* space in the segment.
                                  // Only record this space break if we haven't found a punctuation break yet (higher priority).
                                   if (breakIndex === -1) {
                                      breakIndex = i;
                                      console.log(`Found space break at index ${i}`);
                                      // Continue searching backwards in case there's a punctuation break *earlier* in the segment between i and hardLimitSplitPointExclusive-1.
                                   }
                              }
                          }

                          // 4. Determine the actual split point (exclusive end index for substring)
                          let splitPoint;

                          if (breakIndex !== -1 && breakIndex >= currentPos) {
                              // Found a safe break character at or after currentPos and before idealEndPos.
                              // The split point is immediately after this character.
                              splitPoint = breakIndex + 1;
                              console.log(`Using safe break index ${breakIndex}. Calculated raw splitPoint (exclusive): ${splitPoint}`);

                               // Advance splitPoint past any trailing spaces immediately after the break character,
                               // but ENSURE the final splitPoint does not result in a segment longer than maxLength.
                               // The substring will be text.substring(currentPos, splitPoint). Length is splitPoint - currentPos.
                               // If splitPoint - currentPos > maxLength, it means our 'breakIndex' was too far back relative to max.
                               // This should already be implicitly handled by the initial search limit (idealEndPos-1),
                               // but let's make the "skip trailing spaces" logic robust.

                               let potentialSplitPointAfterSpaces = splitPoint;
                               if (/[.?!]/.test(text[breakIndex])) { // If break was punctuation, skip spaces after it
                                    while( potentialSplitPointAfterSpaces < originalTextLength && /\s/.test(text[potentialSplitPointAfterSpaces])) {
                                        potentialSplitPointAfterSpaces++;
                                    }
                               } else if (text[breakIndex] === ' ') { // If break was a space, skip *that* space
                                   // The splitPoint is already after the space (breakIndex + 1), no need to skip the same space again.
                                   // We only need to skip subsequent spaces *if any* after the one we broke on.
                                   // Simpler: the splitPoint *is* the point *after* the character at breakIndex.
                                   // The segment is text[currentPos...splitPoint-1]. Trailing spaces in this segment
                                   // will be handled by trim() *later*.

                                   // Revert to simpler splitPoint calculation: just after the break index.
                                   // The trimming at step 8 handles trailing spaces in the *extracted segment*.
                                   // The key is ensuring the extracted segment length <= maxLength.
                                   splitPoint = breakIndex + 1;
                                   console.log(`Refined splitPoint (just after breakIndex): ${splitPoint}`);

                               }


                              // The actual split point used for substring is the minimum of the calculated point
                              // and the absolute hard limit based on maxLength.
                              splitPoint = Math.min(splitPoint, hardLimitSplitPointExclusive);
                              console.log(`Final calculated splitPoint after applying Math.min with hard limit: ${splitPoint}`);


                          } else {
                              // No safe break character found within the segment [currentPos, idealEndPos - 1].
                              // This means the segment starting at currentPos up to idealEndPos contains a "word" or sequence
                              // without spaces or punctuation that is longer than maxLength.
                              // According to the strict <= maxLength rule, we MUST cut at the hard limit.
                              // This is the only scenario where a word is cut.
                              splitPoint = hardLimitSplitPointExclusive;
                               console.warn(`No safe break point found within limit ${idealEndPos - currentPos}. Cutting at hard limit: ${splitPoint}. Segment start: "${text.substring(currentPos, Math.min(currentPos + 50, originalTextLength))}${originalTextLength > currentPos + 50 ? '...' : ''}"`);
                          }

                          // --- Validation Check Before Extraction ---
                          // Ensure the calculated splitPoint is valid and greater than currentPos.
                          if (splitPoint <= currentPos) {
                               console.error(`Calculated splitPoint (${splitPoint}) is NOT greater than currentPos (${currentPos}). This indicates an issue. Skipping this segment to prevent infinite loop.`);
                               // As a safeguard, if the splitPoint didn't move, force advance by at least 1 (if possible)
                               if (currentPos < originalTextLength) currentPos++;
                               continue; // Skip adding this potentially problematic block
                          }
                           // Also, double-check the length of the RAW segment we are about to extract
                           const rawSegmentLength = splitPoint - currentPos;
                           if (rawSegmentLength > maxLength) {
                                console.error(`CRITICAL ERROR: Raw segment length (${rawSegmentLength}) EXCEEDS maxLength (${maxLength}) BEFORE substring! currentPos=${currentPos}, splitPoint=${splitPoint}, idealEndPos=${idealEndPos}. This is a fundamental bug in splitPoint calculation.`);
                                 // As a final defense, force the splitPoint down to enforce maxLength strictly.
                                 splitPoint = currentPos + maxLength;
                                 console.error(`Forcing raw segment to exactly maxLength. New splitPoint: ${splitPoint}, New Length: ${splitPoint - currentPos}`);
                           }
                           // After this potential adjustment, rawSegmentLength MUST be <= maxLength


                          // 5. Extract the raw segment using the calculated splitPoint
                          let rawBlock = text.substring(currentPos, splitPoint);
                           console.log(`Extracted raw block (indices ${currentPos} to ${splitPoint-1}): "${rawBlock.replace(/\n/g, '\\n')}" (Length: ${rawBlock.length})`); // Replace newline for console readability


                          // 6. Update currentPos for the next iteration
                           // The start of the next block is where the current block ended.
                          currentPos = splitPoint;
                           console.log(`Updated currentPos to: ${currentPos} (after extracting raw block)`);

                          // 7. Skip any whitespace IMMEDIATELY following the extracted block segment.
                          // This prevents starting the next block with a space/newline that belonged conceptually
                          // to the end of the previous block.
                           let spacesAfterBlock = 0;
                          while (currentPos < originalTextLength && /\s/.test(text[currentPos])) {
                              console.log(`Skipping trailing whitespace after raw block at ${currentPos}`);
                              currentPos++;
                              spacesAfterBlock++;
                          }
                           if(spacesAfterBlock > 0) console.log(`Skipped ${spacesAfterBlock} trailing spaces after raw block extraction.`);
                           console.log(`Final currentPos for next iteration after skipping trailing spaces: ${currentPos}`);


                          // 8. Trim the extracted block and add if not empty
                          let trimmedBlock = rawBlock.trim();
                          if (trimmedBlock.length > 0) {
                              console.log(`Trimmed block: "${trimmedBlock.replace(/\n/g, '\\n')}" (Length: ${trimmedBlock.length}). Adding to blocks array.`);
                              // Final check on the length *after trimming* - this is the content that goes into SRT
                               if (trimmedBlock.length > maxLength) {
                                   console.error(`CRITICAL ERROR: Trimmed block length (${trimmedBlock.length}) still exceeds maxLength (${maxLength})! This should NOT happen.`);
                                   // If this happens, there's a fundamental issue with trim() or character counting.
                                   // As a final, FINAL defense, TRUNCATE THE TRIMMED BLOCK.
                                   trimmedBlock = trimmedBlock.substring(0, maxLength);
                                   console.error(`Forcing trimmed block to truncate to ${maxLength}. New Length: ${trimmedBlock.length}`);
                               }
                              blocks.push(trimmedBlock);
                          } else {
                               console.warn("Trimmed block is empty after processing raw segment. Skipping.");
                          }
                           console.log("--- End of current block logic ---");
                      }

                       console.log(`--- Finished splitting. Generated ${blocks.length} blocks. ---`);
                       // Optional: Log lengths of all final blocks
                       // blocks.forEach((b, i) => console.log(`Block ${i+1} length: ${b.length}`));

                      return blocks;
                  }


                  // Function to generate SRT content string for a single text content
                  function generateSrtContent(text, charCount, pauseTime, readingRate) {
                       if (!text || !text.trim()) {
                           console.log("generateSrtContent: Input text is empty or whitespace.");
                           return ""; // Return empty for empty input
                       }
                       // Ensure pauseTime is treated as a number
                       const numericPauseTime = parseFloat(pauseTime);
                       if (isNaN(numericPauseTime) || numericPauseTime < 0) {
                           console.error("generateSrtContent: Invalid numericPauseTime value:", pauseTime);
                           // Default to 0 if invalid
                           pauseTime = 0;
                       } else {
                           pauseTime = numericPauseTime;
                       }
                       // Ensure readingRate is treated as a number
                       const numericReadingRate = parseInt(readingRate);
                       if (isNaN(numericReadingRate) || numericReadingRate <= 0) {
                            console.error("generateSrtContent: Invalid numericReadingRate value:", readingRate);
                            // Default to a safe value if invalid
                            readingRate = 15; // Arbitrary safe default
                       } else {
                           readingRate = numericReadingRate;
                       }


                      const blocks = splitTextIntoBlocks(text, charCount);
                      let srtContent = '';
                      let currentTime = 0; // Time in seconds

                      if (blocks.length === 0) {
                           console.warn("generateSrtContent: splitTextIntoBlocks returned no blocks after processing.");
                           return "";
                       }

                       console.log(`generateSrtContent: Generating SRT with pauseTime=${pauseTime}s, readingRate=${readingRate} c/s`);

                      blocks.forEach((block, index) => {
                           // block should already be trimmed and non-empty due to logic in splitTextIntoBlocks
                           if (!block || !block.trim()) {
                               console.warn(`Skipping empty block at index ${index} during SRT generation.`);
                               return; // Safeguard
                           }

                          // Double-check length *before* generating SRT line - This is the final sanity check!
                          if (block.length > charCount) {
                               console.error(`FINAL CHECK FAILED: Block length (${block.length}) exceeds charCount (${charCount}) right before SRT generation!`);
                               // Truncate as a last resort if the splitter failed.
                               block = block.substring(0, charCount);
                               console.error(`Truncating block to ${charCount} characters.`);
                          }


                          const duration = block.length / readingRate; // Duration based on reading rate
                          const startTime = currentTime; // Start time of the block text
                          const endTime = currentTime + duration; // End time of the block text

                           // Convert seconds to timestamp format
                          const startTimeStr = formatTimestamp(startTime);
                          const endTimeStr = formatTimestamp(endTime);

                          srtContent += `${index + 1}\n${startTimeStr} --> ${endTimeStr}\n${block.trim()}\n\n`; // Ensure trimmed before adding

                           console.log(`Block ${index + 1}: Start=${startTimeStr}, End=${endTimeStr} (Duration=${duration.toFixed(3)}s, Length=${block.length}). CurrentTime BEFORE pause: ${currentTime.toFixed(3)}s.`);


                          // *** THIS IS WHERE PAUSE TIME IS ADDED ***
                          currentTime = endTime + pauseTime; // The next block starts after the current block ends PLUS the pause time

                           console.log(`        CurrentTime AFTER adding pause (${pauseTime.toFixed(3)}s): ${currentTime.toFixed(3)}s (This will be next block's StartTime)`);

                      });

                       console.log("generateSrtContent: Finished generating SRT.");
                      return srtContent.trim();
                  }

                  // Function to add a result status to the batch results list in the UI
                  function addBatchResultToListUI(fileName, status = 'success') { // status can be 'success', 'error', 'skipped'
                       if (!fileName) return;

                      const list = document.getElementById('batch-result-list');
                      const listItem = document.createElement('li');

                      const fileNameSpan = document.createElement('span');
                      fileNameSpan.textContent = fileName;

                       if (status === 'error') {
                           fileNameSpan.style.color = '#b22222'; // Dark red
                           fileNameSpan.textContent += " (Erro)";
                       } else if (status === 'skipped') {
                            fileNameSpan.style.color = '#a0522d'; // Sienna/brownish
                            fileNameSpan.textContent += " (Ignorado/Vazio)";
                       }


                      listItem.appendChild(fileNameSpan);
                      // Individual download buttons are hidden by CSS

                      list.appendChild(listItem);
                       console.log(`UI list updated for ${fileName} with status ${status}.`);
                  }

                  // Function to trigger file download
                  function downloadSrtFile(content, filename) {
                       if (!content || content.trim().length === 0) {
                           console.warn(`Attempted to download empty content for ${filename}`);
                           return; // Do not download empty content
                       }
                      const blob = new Blob([content], { type: 'text/srt' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = filename;
                      // Append to body and click is necessary for programmatic download
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                      URL.revokeObjectURL(url); // Clean up the URL object
                       console.log(`Triggered download for ${filename}`);
                  }

                  // --- Main Batch Processing Function ---

                  async function processBatchFiles() {
                      const files = document.getElementById('fileInput').files;
                      const charCount = parseInt(document.getElementById('charCount').value);
                      const pauseTime = parseFloat(document.getElementById('pauseTime').value);
                      const readingRate = parseInt(document.getElementById('readingRate').value);


                      if (files.length === 0) {
                          showMessage("Por favor, selecione pelo menos um arquivo .txt.", 'error');
                          console.error("No files selected.");
                          return;
                      }
                       if (isNaN(charCount) || charCount <= 0) {
                          showMessage("Por favor, insira um número válido (maior que 0) para 'Caracteres por bloco'.", 'error');
                           console.error("Invalid charCount:", charCount);
                          return;
                      }
                       if (isNaN(readingRate) || readingRate <= 0) {
                           showMessage("Por favor, insira um número válido (maior que 0) para 'Caracteres por segundo'.", 'error');
                           console.error("Invalid readingRate:", readingRate);
                           return;
                       }
                       // Allow 0 pause time
                       if (isNaN(pauseTime) || pauseTime < 0) {
                            showMessage("Por favor, insira um número válido (não negativo) para 'Tempo de pausa'.", 'error');
                            console.error("Invalid pauseTime:", pauseTime);
                           return;
                       }

                      // --- Reset for new batch ---
                      generatedSrtFiles = []; // Clear previous results storage
                      document.getElementById('batch-result-list').innerHTML = ''; // Clear UI list
                      document.getElementById('downloadAllButton').disabled = true; // Disable download all button
                      showMessage(`Iniciando processamento de ${files.length} arquivo(s)...`, 'info'); // Clear previous status/info messages

                      const batchStatusDiv = document.getElementById('batch-status');
                      batchStatusDiv.textContent = 'Iniciando...';


                      let processedSuccessCount = 0;
                      let failedOrIgnoredCount = 0;


                      // Disable process button and file input during processing
                      const processButton = document.getElementById('processButton');
                      processButton.disabled = true;
                      document.getElementById('fileInput').disabled = true;

                      const filesArray = Array.from(files); // Convert FileList to Array
                      console.log(`Processing batch of ${filesArray.length} files.`);

                      for (let i = 0; i < filesArray.length; i++) {
                          const file = filesArray[i];
                           const displayIndex = i + 1; // 1-based index for status message
                          const fileName = file.name;
                          const baseFileName = fileName.replace(/\.txt$/i, '');
                          const srtFileName = baseFileName + '.srt';


                           // Only process .txt files
                           if (!fileName.toLowerCase().endsWith('.txt')) {
                               batchStatusDiv.textContent = `Ignorando arquivo (${displayIndex}/${files.length}): ${fileName} (Não é .txt)`;
                               failedOrIgnoredCount++;
                               addBatchResultToListUI(fileName, 'skipped'); // Add to UI list
                               await new Promise(resolve => setTimeout(resolve, 300)); // Small delay to see message
                               console.warn(`Skipped file (not .txt): ${fileName}`);
                               continue; // Skip to the next file
                           }

                          batchStatusDiv.textContent = `Processando (${displayIndex}/${files.length}): ${fileName}`;
                          console.log(`--- Processing file ${displayIndex}/${files.length}: ${fileName} ---`);


                          try {
                              const fileContent = await readFileAsText(file); // Wait for file reading
                               console.log(`File read successfully. Content length: ${fileContent.length}`);


                              if (!fileContent || !fileContent.trim()) {
                                   batchStatusDiv.textContent = `Arquivo vazio (${displayIndex}/${files.length}): ${fileName}. Pulando.`;
                                   failedOrIgnoredCount++;
                                   addBatchResultToListUI(fileName, 'skipped'); // Add to UI list
                                   await new Promise(resolve => setTimeout(resolve, 300)); // Small delay
                                   console.warn(`Skipped empty file: ${fileName}`);
                                   continue; // Skip to the next file
                              }

                              // Process the content to get SRT string
                              // Pass the values read from inputs
                              const srtContent = generateSrtContent(fileContent, charCount, pauseTime, readingRate);
                               console.log(`SRT content generated. Length: ${srtContent.length}`);


                               if (!srtContent || srtContent.trim().length === 0) {
                                   batchStatusDiv.textContent = `Falha ao gerar SRT (${displayIndex}/${files.length}): ${fileName}. Texto muito curto ou sem conteúdo válido após divisão.`;
                                    failedOrIgnoredCount++;
                                    addBatchResultToListUI(fileName, 'error'); // Add to UI list
                                    await new Promise(resolve => setTimeout(resolve, 300)); // Small delay
                                   console.error(`generateSrtContent returned empty for ${fileName}`);
                                    continue; // Skip to the next file
                               }

                              // Store the result in the global array
                              generatedSrtFiles.push({ fileName: srtFileName, content: srtContent });

                              // Add result status to the UI list
                              addBatchResultToListUI(srtFileName, 'success');

                              processedSuccessCount++;
                               batchStatusDiv.textContent = `Processado (${displayIndex}/${files.length}): ${fileName}`;
                               await new Promise(resolve => setTimeout(resolve, 50)); // Very small delay

                          } catch (error) {
                              console.error(`Error processing file ${fileName}:`, error);
                              batchStatusDiv.textContent = `Erro (${displayIndex}/${files.length}): ${fileName}`;
                              showMessage(`Erro ao processar '${fileName}': ${error.message}`, 'error');
                              failedOrIgnoredCount++;
                              addBatchResultToListUI(fileName, 'error'); // Indicate failure in the list
                              await new Promise(resolve => setTimeout(resolve, 300)); // Small delay
                          }
                          console.log(`--- Finished processing file ${displayIndex}/${files.length} ---`);

                      } // End of for loop

                      // --- Batch Processing Finished ---

                      batchStatusDiv.textContent = ''; // Clear final status message

                      let finalMessage = `Processamento em lote concluído.`;
                      if (processedSuccessCount > 0) {
                           finalMessage += ` ${processedSuccessCount} arquivo(s) SRT gerado(s) com sucesso.`;
                           document.getElementById('downloadAllButton').disabled = false; // Enable download all button
                      } else {
                           finalMessage += ` Nenhum arquivo SRT gerado com sucesso.`;
                           document.getElementById('downloadAllButton').disabled = true; // Ensure disabled
                      }

                       const totalAttempted = filesArray.length;
                       const skippedOrFailedCount = totalAttempted - processedSuccessCount; // Calculate based on total vs success
                       if (skippedOrFailedCount > 0) {
                            finalMessage += ` ${skippedOrFailedCount} arquivo(s) pulado(s), vazio(s) ou com falha.`;
                       }

                      showMessage(finalMessage, processedSuccessCount > 0 ? 'success' : (skippedOrFailedCount > 0 ? 'error' : 'info'));

                       console.log(`Batch process finished. Success: ${processedSuccessCount}, Failed/Skipped: ${failedOrIgnoredCount}.`);


                      processButton.disabled = false; // Re-enable process button
                      document.getElementById('fileInput').disabled = false; // Re-enable file input
                       // Optional: Clear file selection after processing - helps prevent reprocessing same files accidentally
                       // document.getElementById('fileInput').value = '';
                  }

                  // Function to trigger download for ALL generated SRT files
                  function downloadAllSrtFiles() {
                      if (generatedSrtFiles.length === 0) {
                          showMessage("Não há arquivos SRT gerados para baixar.", 'info');
                          document.getElementById('downloadAllButton').disabled = true; // Ensure disabled
                           console.warn("Download All requested but generatedSrtFiles is empty.");
                          return;
                      }

                      console.log(`Starting download of ${generatedSrtFiles.length} generated SRT files.`);
                      let downloadedCount = 0;
                      // Trigger download for each stored file content
                      generatedSrtFiles.forEach(item => {
                          // The downloadSrtFile function already checks for empty content, but let's be explicit
                           if (item.content && item.content.trim().length > 0) {
                              downloadSrtFile(item.content, item.fileName);
                              downloadedCount++;
                           } else {
                               console.warn(`Skipping download for ${item.fileName} due to empty content in stored data.`);
                           }
                      });

                       // Provide feedback to the user
                       if (downloadedCount > 0) {
                            showMessage(`Tentando baixar ${downloadedCount} arquivo(s) SRT. Verifique sua pasta de downloads.`, 'success');
                       } else {
                           showMessage("Nenhum arquivo SRT com conteúdo válido foi gerado para baixar.", 'info');
                       }
                      console.log(`Finished attempting downloads. ${downloadedCount} downloads triggered.`);


                  }


                  // Helper function to read a file as text using Promises (for async/await)
                  function readFileAsText(file) {
                      return new Promise((resolve, reject) => {
                          const reader = new FileReader();
                          reader.onload = (e) => resolve(e.target.result);
                          reader.onerror = (e) => reject(e.target.error);
                          reader.readAsText(file);
                      });
                  }


                  // Initial setup or checks
                   document.addEventListener('DOMContentLoaded', () => {
                       // Ensure default values are reflected for ranges
                       document.getElementById('readingRateValue').innerText = document.getElementById('readingRate').value + ' c/s';
                       // Ensure download all button is disabled initially
                       document.getElementById('downloadAllButton').disabled = true;
                   });


              </script>

          </body>
          </html>

        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
      - type: FeaturedItem
        title: Senior Software Engineer
        subtitle: Engineering
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
    actions:
      - type: Button
        label: Apply now
        url: /
        icon: arrowRight
        iconPosition: right
        style: primary
    variant: toggle-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pb-40
          - pt-16
          - pl-3
          - pr-3
        justifyContent: center
      subtitle:
        textAlign: center
slug: srt
isDraft: false
seo:
  type: Seo
  metaTitle: Landing Page
  metaDescription: Write here your new page's description including most relevant keywords.
  addTitleSuffix: true
  socialImage: /images/main-hero.jpg
  metaTags: []
---
