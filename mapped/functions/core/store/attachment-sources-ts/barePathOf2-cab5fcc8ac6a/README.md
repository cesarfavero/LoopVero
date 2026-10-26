# `barePathOf2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/store/attachment-sources.ts` · [README do módulo](../../../../../modules/core/store/attachment-sources-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764185-764189](../../../../../../reference/runtime/host-main.cjs#L764185-L764189) | `FunctionDeclaration` | não | `path33` |
| [evaluation:557553-557557](../../../../../../reference/runtime/sand-eval-runner.cjs#L557553-L557557) | `FunctionDeclaration` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764185-764189](../../../../../../reference/runtime/host-main.cjs#L764185-L764189) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:557553-557557](../../../../../../reference/runtime/sand-eval-runner.cjs#L557553-L557557) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:764185

Chamadas escritas diretamente neste corpo: `filePathFromFileUrl`, `import_node_path166.posix.isAbsolute`, `path33.includes`, `path33.startsWith`.

SHA-256 do trecho: `6280137ef00fc19292304822c0d0e66d4c9b31e4182102f1911a6a84872e0a21`.

### evaluation:557553

Chamadas escritas diretamente neste corpo: `filePathFromFileUrl`, `import_node_path35.posix.isAbsolute`, `path33.includes`, `path33.startsWith`.

SHA-256 do trecho: `c6f0cff798cc3ad7596d18a696e20e0695ab6ecb25e2686b7246205f1adc8e24`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
