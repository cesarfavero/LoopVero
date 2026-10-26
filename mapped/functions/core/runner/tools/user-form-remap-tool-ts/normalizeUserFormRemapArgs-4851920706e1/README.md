# `normalizeUserFormRemapArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-remap-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-remap-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778397-778417](../../../../../../../reference/runtime/host-main.cjs#L778397-L778417) | `FunctionDeclaration` | não | `args` |
| [evaluation:578131-578151](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578131-L578151) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778397-778417](../../../../../../../reference/runtime/host-main.cjs#L778397-L778417) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:578131-578151](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578131-L578151) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:778397

Chamadas escritas diretamente neste corpo: `args.targets.map`, `new Set`.

SHA-256 do trecho: `6a43b17c189acc2072088e8e93524cb0e5353541dfd11db9369c391b6599c80b`.

### evaluation:578131

Chamadas escritas diretamente neste corpo: `args.targets.map`, `new Set`.

SHA-256 do trecho: `6a43b17c189acc2072088e8e93524cb0e5353541dfd11db9369c391b6599c80b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
