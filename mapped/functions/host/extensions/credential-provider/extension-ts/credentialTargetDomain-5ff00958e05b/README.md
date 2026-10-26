# `credentialTargetDomain`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:551482-551487](../../../../../../../reference/runtime/host-main.cjs#L551482-L551487) | `FunctionDeclaration` | não | `targetUrl, privacyMode` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551482-551487](../../../../../../../reference/runtime/host-main.cjs#L551482-L551487) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:551482

Chamadas escritas diretamente neste corpo: `siteDomainTelemetryAllowed`, `targetUrl.includes`, `visitedSiteBucket`.

SHA-256 do trecho: `ff91f10ba8a0e1a12ae82410166504ddfb6f17d6dd58e7a2a54e339c1e4e783f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
