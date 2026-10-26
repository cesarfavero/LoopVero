# `connectorDocRefFromId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774507-774523](../../../../../../reference/runtime/host-main.cjs#L774507-L774523) | `FunctionDeclaration` | não | `{   connector,   key,   value,   onDocumentObject }` |
| [evaluation:573743-573759](../../../../../../reference/runtime/sand-eval-runner.cjs#L573743-L573759) | `FunctionDeclaration` | não | `{   connector,   key,   value,   onDocumentObject }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774507-774523](../../../../../../reference/runtime/host-main.cjs#L774507-L774523) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:573743-573759](../../../../../../reference/runtime/sand-eval-runner.cjs#L573743-L573759) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:774507

Chamadas escritas diretamente neste corpo: `.find`, `Object.entries`, `fromKey`, `normalizedArgKey`, `spec.documentId`, `toRef`.

SHA-256 do trecho: `239a12d6efc7cec7054a072b8dd0c779752f9e30f4841456a94784b6a0ab4486`.

### evaluation:573743

Chamadas escritas diretamente neste corpo: `.find`, `Object.entries`, `fromKey`, `normalizedArgKey`, `spec.documentId`, `toRef`.

SHA-256 do trecho: `239a12d6efc7cec7054a072b8dd0c779752f9e30f4841456a94784b6a0ab4486`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
