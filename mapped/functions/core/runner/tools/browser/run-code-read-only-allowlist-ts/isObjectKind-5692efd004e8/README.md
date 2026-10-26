# `isObjectKind`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only-allowlist.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-allowlist-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:749239-749241](../../../../../../../../reference/runtime/host-main.cjs#L749239-L749241) | `FunctionDeclaration` | não | `kind` |
| [evaluation:522090-522092](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522090-L522092) | `FunctionDeclaration` | não | `kind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749239-749241](../../../../../../../../reference/runtime/host-main.cjs#L749239-L749241) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522090-522092](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522090-L522092) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:749239

Chamadas escritas diretamente neste corpo: `OBJECT_KINDS.some`.

SHA-256 do trecho: `e23b9f615395dab1627bc4c5f15a32e8e01fad8403c449e3aca80d68808ea865`.

### evaluation:522090

Chamadas escritas diretamente neste corpo: `OBJECT_KINDS.some`.

SHA-256 do trecho: `e23b9f615395dab1627bc4c5f15a32e8e01fad8403c449e3aca80d68808ea865`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
