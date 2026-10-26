# `boxFileName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-messages-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777957-777960](../../../../../../../reference/runtime/host-main.cjs#L777957-L777960) | `FunctionDeclaration` | não | `filename` |
| [evaluation:577692-577695](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577692-L577695) | `FunctionDeclaration` | não | `filename` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777957-777960](../../../../../../../reference/runtime/host-main.cjs#L777957-L777960) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577692-577695](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577692-L577695) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:777957

Chamadas escritas diretamente neste corpo: `.replace`, `Date.now`, `import_node_path170.posix.basename`.

SHA-256 do trecho: `6e300a9c0952f7e84e51178bd805b529e08faa7b9a1054b33c0b81ed73b7dd34`.

### evaluation:577692

Chamadas escritas diretamente neste corpo: `.replace`, `Date.now`, `import_node_path41.posix.basename`.

SHA-256 do trecho: `3fbbb35357dd30b0ee12a0d5c27490e9e65b10c260045202a6963fbeb2ba28c9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
