# `describeReadContacts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/mobile-read-contacts.ts` · [README do módulo](../../../../../modules/core/device-local-tools/mobile-read-contacts-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:759400-759404](../../../../../../reference/runtime/host-main.cjs#L759400-L759404) | `FunctionDeclaration` | não | `query2` |
| [evaluation:549560-549564](../../../../../../reference/runtime/sand-eval-runner.cjs#L549560-L549564) | `FunctionDeclaration` | não | `query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759400-759404](../../../../../../reference/runtime/host-main.cjs#L759400-L759404) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549560-549564](../../../../../../reference/runtime/sand-eval-runner.cjs#L549560-L549564) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:759400

Chamadas escritas diretamente neste corpo: `.trim`, `query2.replace`, `words2.slice`.

SHA-256 do trecho: `4fd5a6ea6b14c5135a842dc8fd0c0b931010125818aa473da320987bf1545462`.

### evaluation:549560

Chamadas escritas diretamente neste corpo: `.trim`, `query2.replace`, `words.slice`.

SHA-256 do trecho: `08a0a6e8e095f3b758005f31be04d220730416c46c9a0aaa2b06a5375019a715`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
