# `withSignedLookup`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/bot-block-detection.ts` · [README do módulo](../../../../../modules/core/runner/bot-block-detection-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:484586-484595](../../../../../../reference/runtime/sand-eval-runner.cjs#L484586-L484595) | `FunctionDeclaration` | não | `hit, url2, lookupSigned` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484586-484595](../../../../../../reference/runtime/sand-eval-runner.cjs#L484586-L484595) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:484586

Chamadas escritas diretamente neste corpo: `URL.canParse`, `lookupSigned`, `new URL`.

SHA-256 do trecho: `d8e0db447f00a76f2c7934a5813ff9f82c4afe93c6542263f8c5a56232616f64`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
