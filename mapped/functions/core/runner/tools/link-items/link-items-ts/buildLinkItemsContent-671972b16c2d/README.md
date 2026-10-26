# `buildLinkItemsContent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/link-items/link-items.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741095-741104](../../../../../../../../reference/runtime/host-main.cjs#L741095-L741104) | `FunctionDeclaration` | não | `lead, items` |
| [evaluation:482042-482051](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482042-L482051) | `FunctionDeclaration` | não | `lead, items` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741095-741104](../../../../../../../../reference/runtime/host-main.cjs#L741095-L741104) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482042-482051](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482042-L482051) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:741095

Chamadas escritas diretamente neste corpo: `.join`, `items.map`, `lead.trim`.

SHA-256 do trecho: `7c105b7f353f42b31c990570176e80f3d266a3b237f894d17c7c26dfd4b397f8`.

### evaluation:482042

Chamadas escritas diretamente neste corpo: `.join`, `items.map`, `lead.trim`.

SHA-256 do trecho: `7c105b7f353f42b31c990570176e80f3d266a3b237f894d17c7c26dfd4b397f8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
