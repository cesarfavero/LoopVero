# `isWebUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/render-cards.ts` · [README do módulo](../../../../../modules/shared/transcript/render-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:707811-707815](../../../../../../reference/runtime/host-main.cjs#L707811-L707815) | `FunctionDeclaration` | não | `value` |
| [evaluation:564298-564302](../../../../../../reference/runtime/sand-eval-runner.cjs#L564298-L564302) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707811-707815](../../../../../../reference/runtime/host-main.cjs#L707811-L707815) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:564298-564302](../../../../../../reference/runtime/sand-eval-runner.cjs#L564298-L564302) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:707811

Chamadas escritas diretamente neste corpo: `URL.canParse`, `new URL`.

SHA-256 do trecho: `fc81cb667aa4942e3ad5ee4e41aafba3d74a35bc11ff4dd52945239ee5fe9f84`.

### evaluation:564298

Chamadas escritas diretamente neste corpo: `URL.canParse`, `new URL`.

SHA-256 do trecho: `fc81cb667aa4942e3ad5ee4e41aafba3d74a35bc11ff4dd52945239ee5fe9f84`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
