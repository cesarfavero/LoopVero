# `gatedInAppLinksGuidance`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557785-557787](../../../../../../reference/runtime/host-main.cjs#L557785-L557787) | `FunctionDeclaration` | não | `visibility = {}, options2 = {}` |
| [evaluation:546221-546223](../../../../../../reference/runtime/sand-eval-runner.cjs#L546221-L546223) | `FunctionDeclaration` | não | `visibility = {}, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557785-557787](../../../../../../reference/runtime/host-main.cjs#L557785-L557787) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546221-546223](../../../../../../reference/runtime/sand-eval-runner.cjs#L546221-L546223) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:557785

Chamadas escritas diretamente neste corpo: `inAppLinksGuidance`, `legacyInAppLinksGuidance`.

SHA-256 do trecho: `3a430c1ae239a850d891fc6959ebf2c42577eb00af47964f0c6afd836efaa6a3`.

### evaluation:546221

Chamadas escritas diretamente neste corpo: `inAppLinksGuidance`, `legacyInAppLinksGuidance`.

SHA-256 do trecho: `3a430c1ae239a850d891fc6959ebf2c42577eb00af47964f0c6afd836efaa6a3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
