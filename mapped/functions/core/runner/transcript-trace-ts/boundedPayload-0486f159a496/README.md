# `boundedPayload`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/transcript-trace.ts` · [README do módulo](../../../../../modules/core/runner/transcript-trace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765657-765667](../../../../../../reference/runtime/host-main.cjs#L765657-L765667) | `FunctionDeclaration` | não | `value` |
| [evaluation:559022-559032](../../../../../../reference/runtime/sand-eval-runner.cjs#L559022-L559032) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765657-765667](../../../../../../reference/runtime/host-main.cjs#L765657-L765667) | 3 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:559022-559032](../../../../../../reference/runtime/sand-eval-runner.cjs#L559022-L559032) | 3 | 0 | 0 | 4 | 0 | 1 |

### host:765657

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `boundedText`.

Alvos de atribuição ou incremento: `serialized`.

SHA-256 do trecho: `fcc386af7078d19ed32355015b4fd902415463189f0d52d59b73f1461dc7fdde`.

### evaluation:559022

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `boundedText`.

Alvos de atribuição ou incremento: `serialized`.

SHA-256 do trecho: `fcc386af7078d19ed32355015b4fd902415463189f0d52d59b73f1461dc7fdde`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
