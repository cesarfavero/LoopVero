# `uniqueAutomationId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-file-format.ts` · [README do módulo](../../../../../modules/core/automations/automation-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716616-716624](../../../../../../reference/runtime/host-main.cjs#L716616-L716624) | `FunctionDeclaration` | não | `name18, existingIds` |
| [evaluation:627330-627338](../../../../../../reference/runtime/sand-eval-runner.cjs#L627330-L627338) | `FunctionDeclaration` | não | `name18, existingIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716616-716624](../../../../../../reference/runtime/host-main.cjs#L716616-L716624) | 2 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:627330-627338](../../../../../../reference/runtime/sand-eval-runner.cjs#L627330-L627338) | 2 | 1 | 0 | 3 | 0 | 0 |

### host:716616

Chamadas escritas diretamente neste corpo: `Date.now`, `existingIds.has`, `slugifyAutomationName`.

Alvos de atribuição ou incremento: `suffix`.

SHA-256 do trecho: `f52db6e9000012003ff9d7580e34914c0213435d5ad2b0988ce5ed7b71b79efc`.

### evaluation:627330

Chamadas escritas diretamente neste corpo: `Date.now`, `existingIds.has`, `slugifyAutomationName`.

Alvos de atribuição ou incremento: `suffix`.

SHA-256 do trecho: `f52db6e9000012003ff9d7580e34914c0213435d5ad2b0988ce5ed7b71b79efc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
