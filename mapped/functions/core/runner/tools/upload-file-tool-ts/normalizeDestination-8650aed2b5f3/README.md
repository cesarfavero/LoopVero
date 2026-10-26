# `normalizeDestination`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/upload-file-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/upload-file-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774605-774634](../../../../../../../reference/runtime/host-main.cjs#L774605-L774634) | `FunctionDeclaration` | não | `destination` |
| [evaluation:574208-574237](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574208-L574237) | `FunctionDeclaration` | não | `destination` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774605-774634](../../../../../../../reference/runtime/host-main.cjs#L774605-L774634) | 10 | 0 | 0 | 1 | 3 | 0 |
| [evaluation:574208-574237](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574208-L574237) | 10 | 0 | 0 | 1 | 3 | 0 |

### host:774605

Chamadas escritas diretamente neste corpo: `destination.name.includes`, `new SandToolInputError`, `nonEmpty6`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `fbc7c934599edee9f1e97babd9164cae48c6ea4b460aff63403af36e2d309b16`.

### evaluation:574208

Chamadas escritas diretamente neste corpo: `destination.name.includes`, `new SandToolInputError`, `nonEmpty5`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `5d020803f9fd4777f8e19b711a8105c7b4fe93b599a3c81a5e5b2b2caab64b72`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
