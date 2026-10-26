# `clearGatewayDiscovery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-discovery.ts` · [README do módulo](../../../../modules/host/host-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494015-494017](../../../../../reference/runtime/host-main.cjs#L494015-L494017) | `FunctionDeclaration` | sim | `path33 = getGatewayDiscoveryPath()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494015-494017](../../../../../reference/runtime/host-main.cjs#L494015-L494017) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:494015

Chamadas escritas diretamente neste corpo: `import_node_fs34.promises.rm`.

SHA-256 do trecho: `23bde1b25dfcbb4e79a551b3bfe0ff8e60e2031cf23fdeb428f0020200a4b7ef`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
