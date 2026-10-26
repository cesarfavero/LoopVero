# `reviewSandConnectorDownload`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/connector-files/auto-review.ts` · [README do módulo](../../../../../../modules/core/runner/connector-files/auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774924-774930](../../../../../../../reference/runtime/host-main.cjs#L774924-L774930) | `FunctionDeclaration` | sim | `args` |
| [evaluation:574527-574533](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574527-L574533) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774924-774930](../../../../../../../reference/runtime/host-main.cjs#L774924-L774930) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:574527-574533](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574527-L574533) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:774924

Chamadas escritas diretamente neste corpo: `runSandAutoReviewFlow`.

SHA-256 do trecho: `af49f9052f0c578eeca960fb4bfa5e076803cc2bd097c96b48b763c5ffc06d15`.

### evaluation:574527

Chamadas escritas diretamente neste corpo: `runSandAutoReviewFlow`.

SHA-256 do trecho: `af49f9052f0c578eeca960fb4bfa5e076803cc2bd097c96b48b763c5ffc06d15`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
