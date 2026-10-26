# `Walker.playwrightValue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750124-750129](../../../../../../../../reference/runtime/host-main.cjs#L750124-L750129) | `method` | não | `node2, scope` |
| [evaluation:522975-522980](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522975-L522980) | `method` | não | `node2, scope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750124-750129](../../../../../../../../reference/runtime/host-main.cjs#L750124-L750129) | 3 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:522975-522980](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522975-L522980) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:750124

Chamadas escritas diretamente neste corpo: `fail2`, `isDataLike`, `this.expr`.

SHA-256 do trecho: `8a8d8707ff13278bc552055b763b45b80277d2f793818fedfa10c784cc97ec3f`.

### evaluation:522975

Chamadas escritas diretamente neste corpo: `fail`, `isDataLike`, `this.expr`.

SHA-256 do trecho: `0182524a1e727b064212952df467fad5671872acd5e3ec2c12dcfe3449662f4a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
