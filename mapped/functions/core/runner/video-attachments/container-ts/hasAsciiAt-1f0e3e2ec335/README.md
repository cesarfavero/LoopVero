# `hasAsciiAt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/video-attachments/container.ts` · [README do módulo](../../../../../../modules/core/runner/video-attachments/container-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533564-533570](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533564-L533570) | `FunctionDeclaration` | não | `bytes, offset2, text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533564-533570](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533564-L533570) | 2 | 1 | 0 | 3 | 0 | 0 |

### evaluation:533564

Chamadas escritas diretamente neste corpo: `text3.charCodeAt`.

Alvos de atribuição ou incremento: `index`.

SHA-256 do trecho: `249f530fac0594aa8784f351a2d816c3c905a1b877780a9b581e36ea13636bf6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
