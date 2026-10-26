# `proxiedConnectorTag`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/observability/README.md).

**Módulo:** `shared/observability/connector-auth-telemetry.ts` · [README do módulo](../../../../../modules/shared/observability/connector-auth-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:455596-455604](../../../../../../reference/runtime/host-main.cjs#L455596-L455604) | `FunctionDeclaration` | não | `serverUrl` |
| [evaluation:477392-477400](../../../../../../reference/runtime/sand-eval-runner.cjs#L477392-L477400) | `FunctionDeclaration` | não | `serverUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455596-455604](../../../../../../reference/runtime/host-main.cjs#L455596-L455604) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:477392-477400](../../../../../../reference/runtime/sand-eval-runner.cjs#L477392-L477400) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:455596

Chamadas escritas diretamente neste corpo: `URL.canParse`, `boundedConnectorTag`, `new URL`, `providerPath.exec`, `url2.hostname.toLowerCase`.

SHA-256 do trecho: `0349b4b99778c2ba50e74dc07133dc77849c47f20b5bb516d9f869944e14e260`.

### evaluation:477392

Chamadas escritas diretamente neste corpo: `URL.canParse`, `boundedConnectorTag`, `new URL`, `providerPath.exec`, `url2.hostname.toLowerCase`.

SHA-256 do trecho: `0349b4b99778c2ba50e74dc07133dc77849c47f20b5bb516d9f869944e14e260`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
