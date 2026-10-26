# `showCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/vault-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768004-768011](../../../../../../../../reference/runtime/host-main.cjs#L768004-L768011) | `FunctionDeclaration` | sim | `deps, args, form` |
| [evaluation:563520-563527](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563520-L563527) | `FunctionDeclaration` | sim | `deps, args, form` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768004-768011](../../../../../../../../reference/runtime/host-main.cjs#L768004-L768011) | 1 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:563520-563527](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563520-L563527) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:768004

Chamadas escritas diretamente neste corpo: `deps.formCard.show`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `597b4ab88ac161e51fd9265c1b06ff1246c781a2da566e53409bd31e217a87df`.

### evaluation:563520

Chamadas escritas diretamente neste corpo: `deps.formCard.show`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `597b4ab88ac161e51fd9265c1b06ff1246c781a2da566e53409bd31e217a87df`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
