# `sanitizeRemoteUrlForHttpUrl2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-request-composition.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-request-composition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:510217-510230](../../../../../../reference/runtime/host-main.cjs#L510217-L510230) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510217-510230](../../../../../../reference/runtime/host-main.cjs#L510217-L510230) | 3 | 0 | 0 | 3 | 0 | 1 |

### host:510217

Chamadas escritas diretamente neste corpo: `new URL`, `parsed2.host.toLowerCase`, `raw.trim`, `sanitizeRemoteUrl2`, `toSanitizationCandidate2`, `trimRemotePath2`.

SHA-256 do trecho: `42d7e0c64c858aee7da9339a72b111eb13df65ecd47c3b809c7e5ebbde3b4b22`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
