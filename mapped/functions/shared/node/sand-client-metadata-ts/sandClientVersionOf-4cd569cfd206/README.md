# `sandClientVersionOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/sand-client-metadata.ts` · [README do módulo](../../../../../modules/shared/node/sand-client-metadata-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:175817-175827](../../../../../../reference/runtime/host-main.cjs#L175817-L175827) | `FunctionDeclaration` | não | `clientAppVersion, boxNamespace` |
| [evaluation:511763-511773](../../../../../../reference/runtime/sand-eval-runner.cjs#L511763-L511773) | `FunctionDeclaration` | não | `clientAppVersion, boxNamespace` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175817-175827](../../../../../../reference/runtime/host-main.cjs#L175817-L175827) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:511763-511773](../../../../../../reference/runtime/sand-eval-runner.cjs#L511763-L511773) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:175817

Chamadas escritas diretamente neste corpo: `sandClientBaseVersionOf`.

SHA-256 do trecho: `44b1d5808c6e0537516e1eb42174b5f60eac462281b725ded206619b160fa17c`.

### evaluation:511763

Chamadas escritas diretamente neste corpo: `sandClientBaseVersionOf`.

SHA-256 do trecho: `44b1d5808c6e0537516e1eb42174b5f60eac462281b725ded206619b160fa17c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
