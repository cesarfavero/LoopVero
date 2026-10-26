# `parseAutomationNoticeIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-file-format.ts` · [README do módulo](../../../../../modules/core/automations/automation-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716480-716490](../../../../../../reference/runtime/host-main.cjs#L716480-L716490) | `FunctionDeclaration` | não | `value` |
| [evaluation:627194-627204](../../../../../../reference/runtime/sand-eval-runner.cjs#L627194-L627204) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716480-716490](../../../../../../reference/runtime/host-main.cjs#L716480-L716490) | 3 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:627194-627204](../../../../../../reference/runtime/sand-eval-runner.cjs#L627194-L627204) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:716480

Chamadas escritas diretamente neste corpo: `Array.isArray`, `entry.trim`, `ids.includes`, `ids.push`, `isAutomationNoticeId`.

SHA-256 do trecho: `71d6118ea1fa3c8a21fb9c9165de74e0693845f5f79b8eadea4b999f8417907b`.

### evaluation:627194

Chamadas escritas diretamente neste corpo: `Array.isArray`, `entry.trim`, `ids.includes`, `ids.push`, `isAutomationNoticeId`.

SHA-256 do trecho: `71d6118ea1fa3c8a21fb9c9165de74e0693845f5f79b8eadea4b999f8417907b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
