# `_SandAgentRunner.resolveAutoReviewApproval`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:593791-593793](../../../../../../reference/runtime/sand-eval-runner.cjs#L593791-L593793) | `method` | não | `approvalId, resolution` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593791-593793](../../../../../../reference/runtime/sand-eval-runner.cjs#L593791-L593793) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:593791

Chamadas escritas diretamente neste corpo: `this.autoReviewController.resolveApproval`.

SHA-256 do trecho: `9622457bfd1148f35cc10d81987d77601aa8c0a17e06b4c3fc6ce5d2d43c4c22`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
