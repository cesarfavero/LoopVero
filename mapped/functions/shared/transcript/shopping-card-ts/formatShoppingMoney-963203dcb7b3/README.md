# `formatShoppingMoney`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/shopping-card.ts` · [README do módulo](../../../../../modules/shared/transcript/shopping-card-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:707737-707747](../../../../../../reference/runtime/host-main.cjs#L707737-L707747) | `FunctionDeclaration` | não | `money, locale = "en-US"` |
| [evaluation:481859-481869](../../../../../../reference/runtime/sand-eval-runner.cjs#L481859-L481869) | `FunctionDeclaration` | não | `money, locale = "en-US"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707737-707747](../../../../../../reference/runtime/host-main.cjs#L707737-L707747) | 1 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:481859-481869](../../../../../../reference/runtime/sand-eval-runner.cjs#L481859-L481869) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:707737

Chamadas escritas diretamente neste corpo: `.format`, `Number.isInteger`, `new Intl.NumberFormat`.

SHA-256 do trecho: `6c5054bd9b682842f324a3b6bfa38943160876990decdaaccf1723b405cd109d`.

### evaluation:481859

Chamadas escritas diretamente neste corpo: `.format`, `Number.isInteger`, `new Intl.NumberFormat`.

SHA-256 do trecho: `6c5054bd9b682842f324a3b6bfa38943160876990decdaaccf1723b405cd109d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
