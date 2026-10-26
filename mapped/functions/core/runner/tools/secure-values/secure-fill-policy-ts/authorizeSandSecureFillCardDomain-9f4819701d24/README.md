# `authorizeSandSecureFillCardDomain`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/secure-fill-policy.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/secure-fill-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766712-766724](../../../../../../../../reference/runtime/host-main.cjs#L766712-L766724) | `FunctionDeclaration` | não | `target` |
| [evaluation:562225-562237](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562225-L562237) | `FunctionDeclaration` | não | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766712-766724](../../../../../../../../reference/runtime/host-main.cjs#L766712-L766724) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:562225-562237](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562225-L562237) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:766712

Chamadas escritas diretamente neste corpo: `authorizeSecureValueCardSites`, `frameClassification`, `parseFillSite`.

SHA-256 do trecho: `d050b287308e8030e1f7ab4bda7b47ab67313a89c7709328aad446bba59d4efb`.

### evaluation:562225

Chamadas escritas diretamente neste corpo: `authorizeSecureValueCardSites`, `frameClassification`, `parseFillSite`.

SHA-256 do trecho: `d050b287308e8030e1f7ab4bda7b47ab67313a89c7709328aad446bba59d4efb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
