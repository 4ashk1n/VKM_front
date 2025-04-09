import { Stack, Table, Title } from "@mantine/core";
import ContentBlock from "./App/ContentBlock";


const ServicesPage = () => {
    return (
        <Stack align={'center'} gap={40}>
            <Title>Перечень основных услуг/работ, выполняемых в ВКМ</Title>
            <ContentBlock p={0}>
                
            <Table w='100%'>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Наименование услуги/работы</Table.Th>
                        <Table.Th>	Стоимость, руб.
                            (без учета НДС)</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    <Table.Tr>
                        <Table.Td>
                            Предоставление образцов штаммов микроорганизмов **
                        </Table.Td>
                        <Table.Td>

                        </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Из открытого фонда (www.vkm.ru)</Table.Td>
                        <Table.Td></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Лиофилизированный образец (в ампуле)</Table.Td>
                        <Table.Td>4000</Table.Td>
                    </Table.Tr>ё
                    <Table.Tr>
                        <Table.Td>- активная культура на питательной среде (в пробирке)</Table.Td>
                        <Table.Td>6000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>- активная культура анаэробных бактерий на питательной среде (в пробирке)</Table.Td>
                        <Table.Td>7000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>- штамм с определенными свойствами или тест-культура (лиофилизированный образец в ампуле)</Table.Td>
                        <Table.Td>6000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td><strong>Из некаталожного («рабочего») фонда ВКМ</strong></Table.Td>
                        <Table.Td>По запросу***</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td><b>Депонирование штаммов микроорганизмов в связи с патентной процедурой</b></Table.Td>
                        <Table.Td></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Депонирование штамма в соответствии с действующей в РФ патентной процедурой, с предоставлением свидетельства о депонировании</Table.Td>
                        <Table.Td>7000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Депонирование по правилам Будапештского Договора (международная система депонирования), с предоставлением свидетельства о депонировании</Table.Td>
                        <Table.Td>500 Евро****</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Предоставление депозитору образца штамма (1 образец в год в течение первых 5-ти лет хранения; 1 образец в 3 года в течение последующих 25-ти лет)</Table.Td>
                        <Table.Td>Бесплатно</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Предоставление депозитору дополнительного образца штамма, депонированного в соответствии с действующей в РФ патентной процедурой</Table.Td>
                        <Table.Td>4000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Предоставление депозитору дополнительного образца штамма, депонированного по правилам Будапештского договора</Table.Td>
                        <Table.Td>120 Евро****</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Предоставление образца депонированного штамма иным лицам, имеющим должным образом оформленное разрешение от депозитора или в соответствии с правилом 11 Инструкции к Будапештскому договору</Table.Td>
                        <Table.Td>130 Евро****</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Выдача сертификата о жизнеспособности депонированного штамма, депонированного по правилам Будапештского договора</Table.Td>
                        <Table.Td>120 Евро****</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Выдача сертификата о жизнеспособности депонированного штамма, депонированного в соответствии с действующей в РФ патентной процедурой</Table.Td>
                        <Table.Td>2000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Предоставление депозитору Уведомления о внесении изменений в паспорт штамма (научное название штамма, наименование организации депозитора и т.п.)</Table.Td>
                        <Table.Td>2000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Предоставление копий документов и выписок из документов</Table.Td>
                        <Table.Td>1200</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td><b>Депонирование штаммов микроорганизмов на условиях открытого доступа</b></Table.Td>
                        <Table.Td></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>В связи с описанием новых видов (с предоставлением справки о депонировании штамма в ВКМ и включением его в Каталог после опубликования статьи)</Table.Td>
                        <Table.Td>Бесплатно</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>В связи с публикациями иного характера или иными целями (с предоставлением справки о депонировании штамма в ВКМ и включением его в Каталог после опубликования статьи) (по согласованию с куратором коллекции)</Table.Td>
                        <Table.Td>По запросу***</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td><b>Конфиденциальное хранение</b></Table.Td>
                        <Table.Td></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Консервация штамма по стандартной процедуре и хранение в течение 1 года</Table.Td>
                        <Table.Td>4000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Консервация штамма по стандартной процедуре и хранение в течение 5 лет</Table.Td>
                        <Table.Td>6000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Предоставление по запросу образца штамма депозитору в ампуле (1 раз в полгода)</Table.Td>
                        <Table.Td>Бесплатно</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Предоставление депозитору дополнительного образца штамма</Table.Td>
                        <Table.Td>3000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td><b>Лиофилизация штаммов микроорганизмов</b></Table.Td>
                        <Table.Td></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Лиофилизация штаммов, предоставленных заказчиком (10 и более ампул, объем 1,5 мл), стоимость 1 ампулы</Table.Td>
                        <Table.Td>250</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td><strong>Характеристика и идентификация штаммов микроорганизмов</strong></Table.Td>
                        <Table.Td></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td><strong><em>Бактерии и археи</em></strong></Table.Td>
                        <Table.Td></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Идентификация штамма бактерий и архей на основе анализа гена 16S рРНК</Table.Td>
                        <Table.Td>9000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Идентификация штамма бактерий и архей на основе анализа функциональных генов (<i>gyrB, recA, rpoB, ppk</i> и др.) <a href="Add/7-6-3.htm">Далее</a>...</Table.Td>
                        <Table.Td>10000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Идентификация штамма бактерий и архей методом МАЛДИ масс-спектрометрии с использованием базы данных Bruker и локальной базы данных ВКМ</Table.Td>
                        <Table.Td>3000 - 5000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td><b><em>Мицелиальные грибы</em></b></Table.Td>
                        <Table.Td></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Идентификация на основе морфологических признаков <a href="Add/7-1.htm">Далее</a>...</Table.Td>
                        <Table.Td>7000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Идентификация культур мицелиальных грибов на основе анализа нуклеотидных последовательностей ITS региона (стандартный баркод грибов, ~ 600 п.н.) <a href="Add/7-2-2.htm">Далее</a>...</Table.Td>
                        <Table.Td>8000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Филогенетический анализ на основе нуклеотидных последовательностей ITS региона и D1-D3 домены большой субъединицы рРНК (расширенный баркод грибов, ~ 1500 п.н.) <a href="Add/7-2-3.htm">Далее</a>...</Table.Td>
                        <Table.Td>9000 - 13000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td><strong><em>Дрожжи</em></strong></Table.Td>
                        <Table.Td></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Идентификация культур дрожжей на основе анализа нуклеотидных последовательностей ITS региона и/или D1/D2 доменов большой субъединицы рРНК (DNA barcoding) <a href="Add/7-3.htm">Далее</a>...</Table.Td>
                        <Table.Td>8000 - 10000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Филогенетический анализ на основе участков ДНК (SSU, ITS, D1/D2 домены LSU) с привлечением данных по последовательностям функциональных генов (TEF1a, RPB1 и др.)</Table.Td>
                        <Table.Td>9000 - 13000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Определение морфологических и физиолого-биохимических характеристик</Table.Td>
                        <Table.Td>По запросу***</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td><b>Определение хемотаксономических характеристик штаммов микроорганизмов *****</b></Table.Td>
                        <Table.Td></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Определение изомера диаминопимелиновой кислоты клеточной стенки <a href="Add/7-9.htm">Далее</a>...</Table.Td>
                        <Table.Td>По запросу***</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Определение состава аминокислот пептидогликана (с предварительным получением препарата клеточной стенки) <a href="Add/7-10.htm">Далее</a>...</Table.Td>
                        <Table.Td>По запросу***</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Определение состава жирных кислот целых клеток <a href="Add/7-14.htm">Далее</a>...</Table.Td>
                        <Table.Td>По запросу***</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Определение состава изопреноидных хинонов дыхательной цепи (менахинонов, убихинонов) <a href="Add/7-15.htm">Далее</a>...</Table.Td>
                        <Table.Td>По запросу***</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Определение состава полярных липидов <a href="Add/7-16.htm">Далее</a>...</Table.Td>
                        <Table.Td>По запросу***</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Анализ продуктов метаболизма микроорганизмов <a href="Add/7-17.htm">Далее</a>...</Table.Td>
                        <Table.Td>По запросу***</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td><b>Выделение и культивирование микроорганизмов</b></Table.Td>
                        <Table.Td></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Очистка контаминированной культуры, полученной от заказчика</Table.Td>
                        <Table.Td>5000</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Выделение штаммов микроорганизмов из ассоциации культур (смешанного образца), полученной от заказчика</Table.Td>
                        <Table.Td>По запросу***</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Выделение микроорганизмов определенной физиологической группы или с конкретными свойствами из природныого образца</Table.Td>
                        <Table.Td>По запросу***</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Получение биомассы микроорганизмов и культуральной жидкости для анализов</Table.Td>
                        <Table.Td>По запросу***</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td><b>Определение грибостойкости промышленных материалов и изделий в соответствии с требованиями ГОСТ РФ</b> <a href="Add/12.htm">Далее</a>...</Table.Td>
                        <Table.Td>По запросу***</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td><b>Консультации специалистов, проведение индивидуальных стажировок и курсов повышения квалификации по таксономии и коллекционной деятельности</b></Table.Td>
                        <Table.Td>По запросу***</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td><b>Оформление документов и пересылка штаммов микроорганизмов за рубеж (получение из-за рубежа), без учета почтовых расходов</b></Table.Td>
                        <Table.Td>По запросу***</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td><b>Проведение экспертиз и подготовка заключений по запросам судебно-следственных органов и экспертов</b></Table.Td>
                        <Table.Td>Бесплатно</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td><b>Другие виды работ/услуг</b></Table.Td>
                        <Table.Td>По запросу***</Table.Td>
                    </Table.Tr>

                </Table.Tbody>
            </Table>
            </ContentBlock>
        </Stack>
    )
}

export default ServicesPage;