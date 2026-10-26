# `signedOutToolResultError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/signed-out-rejection.ts` · [README do módulo](../../../../../modules/core/mcp/signed-out-rejection-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585317-585326](../../../../../../reference/runtime/sand-eval-runner.cjs#L585317-L585326) | `FunctionDeclaration` | não | `result, serverHost` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585317-585326](../../../../../../reference/runtime/sand-eval-runner.cjs#L585317-L585326) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:585317

Chamadas escritas diretamente neste corpo: `PROVIDER_INVALID_TOKEN_ANSWERS.find`, `answer.matches`, `asSignedOut`, `firstText`, `parseProviderErrorFields2`, `text3.trim`.

SHA-256 do trecho: `e431d46cf89ab857745059df674c1b975f94d4d96d5218c629716911e1988ec5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
