# `decapitalize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `shared/sand-text.ts` · [README do módulo](../../../../modules/shared/sand-text-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:227876-227879](../../../../../reference/runtime/host-main.cjs#L227876-L227879) | `FunctionDeclaration` | não | `phrase2` |
| [evaluation:474412-474415](../../../../../reference/runtime/sand-eval-runner.cjs#L474412-L474415) | `FunctionDeclaration` | não | `phrase2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:227876-227879](../../../../../reference/runtime/host-main.cjs#L227876-L227879) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474412-474415](../../../../../reference/runtime/sand-eval-runner.cjs#L474412-L474415) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:227876

Chamadas escritas diretamente neste corpo: `first.toLowerCase`, `phrase2.slice`.

SHA-256 do trecho: `f82cb59c8c9ae74e320039dbe204fab368a935c7f32756edff30c27930081d07`.

### evaluation:474412

Chamadas escritas diretamente neste corpo: `first.toLowerCase`, `phrase2.slice`.

SHA-256 do trecho: `f82cb59c8c9ae74e320039dbe204fab368a935c7f32756edff30c27930081d07`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
