# `findConnectorManifest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/channels.ts` · [README do módulo](../../../../../modules/shared/channels/channels-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505295-505297](../../../../../../reference/runtime/host-main.cjs#L505295-L505297) | `FunctionDeclaration` | não | `platform2` |
| [evaluation:474526-474528](../../../../../../reference/runtime/sand-eval-runner.cjs#L474526-L474528) | `FunctionDeclaration` | não | `platform` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505295-505297](../../../../../../reference/runtime/host-main.cjs#L505295-L505297) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474526-474528](../../../../../../reference/runtime/sand-eval-runner.cjs#L474526-L474528) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:505295

Chamadas escritas diretamente neste corpo: `CONNECTOR_MANIFESTS.find`.

SHA-256 do trecho: `0b4a84c8bee01538a88524615f8a593746d96321e49f96db7c386981f946b51e`.

### evaluation:474526

Chamadas escritas diretamente neste corpo: `CONNECTOR_MANIFESTS.find`.

SHA-256 do trecho: `6c830ead9c47dcef954006cac0dc63dcdf45b1a65fa3e13db8bf9da4ca26c7bb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
