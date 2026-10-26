# `messagesGrantsAskKey`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/messages-grants-gate.ts` · [README do módulo](../../../../../../modules/core/runner/tools/messages-grants-gate-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777829-777833](../../../../../../../reference/runtime/host-main.cjs#L777829-L777833) | `FunctionDeclaration` | não | `ctx` |
| [evaluation:577564-577568](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577564-L577568) | `FunctionDeclaration` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777829-777833](../../../../../../../reference/runtime/host-main.cjs#L777829-L777833) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:577564-577568](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577564-L577568) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:777829

Chamadas escritas diretamente neste corpo: `ctx.get`.

SHA-256 do trecho: `595174a9c9bdf1bbc721e8d417d915729948ee811ebbcb3642b6c91499cce21e`.

### evaluation:577564

Chamadas escritas diretamente neste corpo: `ctx.get`.

SHA-256 do trecho: `7e66dab28b41beea9e3bfb7c4362e230b25507d8868f27d6effcc634c5359269`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
