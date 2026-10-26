# `lastCodePoints`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616910-616916](../../../../../reference/runtime/host-main.cjs#L616910-L616916) | `FunctionDeclaration` | não | `text3, max` |
| [evaluation:285450-285456](../../../../../reference/runtime/sand-eval-runner.cjs#L285450-L285456) | `FunctionDeclaration` | não | `text3, max` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616910-616916](../../../../../reference/runtime/host-main.cjs#L616910-L616916) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:285450-285456](../../../../../reference/runtime/sand-eval-runner.cjs#L285450-L285456) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:616910

Chamadas escritas diretamente neste corpo: `isLowSurrogate2`, `text3.charCodeAt`, `text3.slice`.

Alvos de atribuição ou incremento: `count2`, `start`.

SHA-256 do trecho: `e781f393ec8ab6f717a2708870b83adbdfccb4360f4241fcc154925b251baeb8`.

### evaluation:285450

Chamadas escritas diretamente neste corpo: `isLowSurrogate`, `text3.charCodeAt`, `text3.slice`.

Alvos de atribuição ou incremento: `count2`, `start`.

SHA-256 do trecho: `14c589e237f20a8de97ed78adbbc11fd71fb9a2f75baa21029c2ae3d9070ddea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
