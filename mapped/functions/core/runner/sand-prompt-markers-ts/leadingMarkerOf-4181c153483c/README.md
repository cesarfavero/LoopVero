# `leadingMarkerOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sand-prompt-markers.ts` · [README do módulo](../../../../../modules/core/runner/sand-prompt-markers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491157-491159](../../../../../../reference/runtime/host-main.cjs#L491157-L491159) | `FunctionDeclaration` | não | `text3, markers` |
| [evaluation:526063-526065](../../../../../../reference/runtime/sand-eval-runner.cjs#L526063-L526065) | `FunctionDeclaration` | não | `text3, markers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491157-491159](../../../../../../reference/runtime/host-main.cjs#L491157-L491159) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526063-526065](../../../../../../reference/runtime/sand-eval-runner.cjs#L526063-L526065) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:491157

Chamadas escritas diretamente neste corpo: `markers.find`.

SHA-256 do trecho: `b4242e83d176a137101f776cdef6499e699dbf0a690538c57b3c0cc7667e6405`.

### evaluation:526063

Chamadas escritas diretamente neste corpo: `markers.find`.

SHA-256 do trecho: `b4242e83d176a137101f776cdef6499e699dbf0a690538c57b3c0cc7667e6405`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
