# `TracedComputerUseSpan.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742985-742990](../../../../../../../../reference/runtime/host-main.cjs#L742985-L742990) | `method` | não | `ctx, span` |
| [evaluation:515836-515841](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515836-L515841) | `method` | não | `ctx, span` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742985-742990](../../../../../../../../reference/runtime/host-main.cjs#L742985-L742990) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515836-515841](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515836-L515841) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:742985

Chamadas escritas diretamente neste corpo: `ctx.signal.addEventListener`, `this.endAtAbort`.

Alvos de atribuição ou incremento: `this.ctx`, `this.span`.

SHA-256 do trecho: `40638665ecdd5e74806dd681b97ce081b49672d16ee396b3c02740cd4eced699`.

### evaluation:515836

Chamadas escritas diretamente neste corpo: `ctx.signal.addEventListener`, `this.endAtAbort`.

Alvos de atribuição ou incremento: `this.ctx`, `this.span`.

SHA-256 do trecho: `40638665ecdd5e74806dd681b97ce081b49672d16ee396b3c02740cd4eced699`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
