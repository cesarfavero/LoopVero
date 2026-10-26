# `getGatewayDiscoveryPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/host-paths.ts` · [README do módulo](../../../../modules/core/host-paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:430935-430937](../../../../../reference/runtime/host-main.cjs#L430935-L430937) | `FunctionDeclaration` | não | `homeDir = (0, import_node_os.homedir)()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430935-430937](../../../../../reference/runtime/host-main.cjs#L430935-L430937) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:430935

Chamadas escritas diretamente neste corpo: `getSandRootDir`.

SHA-256 do trecho: `ada7be2ca3badc88fd79d8efd9d0a0c85c80a13e7170575f63b34b8e8c87bd46`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
