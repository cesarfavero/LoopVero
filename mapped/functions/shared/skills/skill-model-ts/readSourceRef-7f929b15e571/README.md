# `readSourceRef`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `shared/skills/skill-model.ts` · [README do módulo](../../../../../modules/shared/skills/skill-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683009-683016](../../../../../../reference/runtime/host-main.cjs#L683009-L683016) | `FunctionDeclaration` | não | `data2` |
| [evaluation:534121-534128](../../../../../../reference/runtime/sand-eval-runner.cjs#L534121-L534128) | `FunctionDeclaration` | não | `data2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683009-683016](../../../../../../reference/runtime/host-main.cjs#L683009-L683016) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:534121-534128](../../../../../../reference/runtime/sand-eval-runner.cjs#L534121-L534128) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:683009

Chamadas escritas diretamente neste corpo: `isUnknownRecord2`, `raw.trim`.

SHA-256 do trecho: `51991171ebb31e0c0c530ec20059ad361a71a150a822894b1a6e012a144d9f84`.

### evaluation:534121

Chamadas escritas diretamente neste corpo: `isUnknownRecord2`, `raw.trim`.

SHA-256 do trecho: `51991171ebb31e0c0c530ec20059ad361a71a150a822894b1a6e012a144d9f84`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
