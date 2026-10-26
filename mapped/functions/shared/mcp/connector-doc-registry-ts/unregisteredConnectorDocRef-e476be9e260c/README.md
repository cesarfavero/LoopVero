# `unregisteredConnectorDocRef`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:573862-573882](../../../../../../reference/runtime/sand-eval-runner.cjs#L573862-L573882) | `FunctionDeclaration` | não | `{   connectorNames,   raw,   registrableLabel: registrableLabel2 }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:573862-573882](../../../../../../reference/runtime/sand-eval-runner.cjs#L573862-L573882) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:573862

Chamadas escritas diretamente neste corpo: `.replaceAll`, `connectorNames.includes`, `label.toLowerCase`, `parseHttpsUrl`, `registrableLabel2`, `url2.hostname.toLowerCase`, `url2.pathname.replace`.

SHA-256 do trecho: `83be6dbec032e202b9296afe941d30c1b7baed8fe014157e8b587acef7b99bf0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
