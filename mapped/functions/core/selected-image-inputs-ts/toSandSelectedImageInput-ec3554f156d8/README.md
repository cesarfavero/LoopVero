# `toSandSelectedImageInput`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/selected-image-inputs.ts` · [README do módulo](../../../../modules/core/selected-image-inputs-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582865-582877](../../../../../reference/runtime/sand-eval-runner.cjs#L582865-L582877) | `FunctionDeclaration` | não | `image2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582865-582877](../../../../../reference/runtime/sand-eval-runner.cjs#L582865-L582877) | 3 | 0 | 0 | 2 | 1 | 0 |

### evaluation:582865

Chamadas escritas diretamente neste corpo: `new Error`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `bcf97df172fbeb334038b13dddd5bb47e75bb4c462d5646b9b1224fc4e3023cc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
